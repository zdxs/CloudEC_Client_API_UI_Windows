(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.TUPRender2 = factory();
    }
}(this, function () {
    function TUPRender2(opts) {
        var serviceAddr = opts.callSvrAddr || "localhost";
        if (typeof MozWebSocket !== "undefined") {
            this.wsocket = new MozWebSocket("ws://" + serviceAddr + `:${window.CLIENTCONFIG.TUP_PORT || "7683"}/` + opts.getUri, "tup_call_video_service_protocol");
        } else {
            this.wsocket = new WebSocket("ws://" + serviceAddr + `:${window.CLIENTCONFIG.TUP_PORT || "7683"}/` + opts.getUri, "tup_call_video_service_protocol");
        }
        this.wsocket.binaryType = "arraybuffer";
        this.canvas = opts.canvas;
        this.ssrc = opts.ssrc || "";
        this.viewW = opts.viewW || 480;
        this.viewH = opts.viewH || 270;
        this.uri = opts.getUri;
        this.cnt = 0;
        this.printTimes = 0;

        // widthR = Math.round(this.viewW /8)*8;
        // heightR = Math.round(this.viewH/8)*8;
        // this.viewW = widthR;
        // this.viewH = heightR;
        this.yuvCanvas = new YUVCanvas({ canvas: this.canvas, width: this.viewW, height: this.viewH });
        window.log("<video>new tupRender2, self set uri = "+this.uri+",this.viewW = "+this.viewW+",this.viewH = "+this.viewH);
        if( this.yuvCanvas && !this.yuvCanvas.isWebGL()){
          window.log("<video>new tupRender2, canvas is not support webgl");
          if(!window.ischeckBfVideo){
            alert(language.CHECK_VIDEO_SUPPORT_WEBGL);
            window.ischeckBfVideo = true;
          }
        }
        this.getFrameFn = opts.getFrameFn;
        this.resUpdateFn = opts.resUpdateFn;
        this.onSocketClose = opts.onSocketClose;

        this.wsocket.onopen = function () {
            var data = {
                "width": (this.uri === "data_frame_share")? 1920:this.viewW,
                "height": (this.uri === "data_frame_share")? 1080:this.viewH
            };
            var sendStr = JSON.stringify(data);
            this.wsocket.send(sendStr);
            window.log("<video>socket is open, uri = "+this.uri);
        }.bind(this);

        this.wsocket.onclose = function () {
            this.onSocketClose();
            window.log("<video>socket is closed, uri = "+this.uri);
        }.bind(this);
        
        this.wsocket.onmessage = function (msg) {
            if (typeof msg.data === "string") {
                var videoParam = JSON.parse(msg.data);
                if (videoParam.type === 1) {
                    if(window.isDataSharing){
                        if (this.ssrc !== "") {
                            this.getFrameFn(this.onFrameData, Number(this.ssrc));
                            if ((this.printTimes % 200 === 0)) {
                                window.log("<video>wsocket.onmessage,ssrc is", this.ssrc);
                            }
                        }
                        else {
                            this.cnt++;
                            if (this.cnt > 2) {
                                this.getFrameFn(this.onFrameData);
                                this.cnt = 0;
                            }
                        }
                    }else{
                        if(this.ssrc !== "")
                        {
                            this.getFrameFn(this.onFrameData,Number(this.ssrc));
                            if ((this.printTimes % 200 === 0)) {
                                window.log("<video>wsocket.onmessage,ssrc is", this.ssrc);
                            }
                        }
                        else{
                            this.getFrameFn(this.onFrameData);
                        }
                    }                  
                }
                else {
                    window.log("<video>wsocket.onmessage,recv video uri = "+this.uri+",wh = "+JSON.stringify(msg.data));
                    window.log("<video>wsocket.onmessage,recv video uri = "+this.uri+",this.w = "+this.viewW+",this.h = "+this.viewH);
                    let oldRadio = 0;
                    if(this.viewW !== 0 && this.viewH !== 0)
                    {
                        oldRadio = this.viewW/this.viewH;
                    }
                    let newRadio = oldRadio;

                    if(videoParam.original_width !== 0 && videoParam.original_height !== 0){
                        newRadio = videoParam.original_width/videoParam.original_height;
                    }
                    if(this.yuvCanvas && Math.abs(newRadio - oldRadio) > 0.3) //16/9到4/3
                    {
                        window.log("<video>wsocket.onmessage, tup wh radio is changed, oldRadio is " + oldRadio + ",newRadio is " + newRadio);
                        this.resUpdateFn(videoParam.original_width, videoParam.original_height, videoParam.width, videoParam.height,this.ssrc);
                    }
                }
            }
        }.bind(this);

        this.onFrameData = function (width, height, buffer) {
          if( this.yuvCanvas && !this.yuvCanvas.isWebGL()){
            window.log("<video>onFrameData, canvas is not support webgl");
            return;
          }
          
          try{
              if(buffer && width > 0 && height > 0 && buffer.length === width*height*1.5){
                let bytes = new Uint8Array(buffer);
                let ylen = width * height;
                let uvlen = (width / 2) * (height / 2);
                this.printTimes ++;
                if ((this.printTimes % 200 === 0)) {
                  window.log("<video>onFrameData,width is " + width + ",height is " + height + ",uri is " + this.uri);
                  
                  window.log("<video>onFrameData,yData is ", JSON.stringify(bytes.subarray(0, 10)));
                  window.log("<video>onFrameData,uData is ", JSON.stringify(bytes.subarray(ylen, ylen + 10)));
                  window.log("<video>onFrameData,vData is ", JSON.stringify(bytes.subarray(ylen + uvlen, ylen + uvlen + 10)));
                }
                this.yuvCanvas.drawNextOutputPicture({
                  yData: bytes.subarray(0, ylen),
                  uData: bytes.subarray(ylen, ylen + uvlen),
                  vData: bytes.subarray(ylen + uvlen, ylen + uvlen + uvlen),
                  yDataPerRow: width,
                  yRowCnt: height,
                  uDataPerRow: width / 2,
                  uRowCnt: height / 2
                });
              }else{
                 window.log("<video>onFrameDataElse,width is " + width + ",height is " + height+",uri is " + this.uri+",buffer length = "+buffer.length);
              }
          } catch (error) {
              window.log("<video>onFrameDataTryCatch,width is " + width + ",height is " + height+",uri is " + this.uri+",buffer length = "+buffer.length);
          }  
        }.bind(this);
    }

    TUPRender2.prototype.sendData = function (data) {
        var sendStr = JSON.stringify(data);
        this.wsocket.send(sendStr);
    }

    TUPRender2.prototype.closeSocket = function () {
        this.wsocket.close();
        this.wsocket = null;
        window.log("<video>TUPRender2,closeSocket");
    }

    TUPRender2.prototype.setViewWH = function (width, height, view) {
        let widthR = width;//Math.round(width/8)*8;
        let heightR = height;//Math.round(height/8)*8;
        window.log("<video>setViewWH, self set uri = "+this.uri+",width = "+widthR+",heightR = "+heightR);
        if (this.yuvCanvas ) {
            if((widthR === this.viewW && heightR === this.viewH) && this.canvas === view){
                window.log("<video>setviewWH, wh is same to self wh,no need to changeCanvasSize");
            }
            else{
                this.yuvCanvas.changeCanvasSize(widthR, heightR, view);
                window.log("setViewWH,changeCanvasSize");
                //this.resUpdateFn(widthR, heightR, widthR, heightR, this.ssrc);

                if (this.wsocket.readyState === this.wsocket.OPEN) {
                    var data = {
                        "width": (this.uri === "data_frame_share")? 1920:widthR,
                        "height": (this.uri === "data_frame_share")? 1080:heightR
                    };
                    var sendStr = JSON.stringify(data);
                    this.wsocket.send(sendStr);
                    this.viewW = widthR;
                    this.viewH = heightR;
                    this.canvas = view;
                    window.log("<video>setviewWH,self set uri = "+this.uri+",this.viewW = "+this.viewW+",this.viewH = "+this.viewH);
                }
            }
        }else{
           window.log("<video>setviewWH, yuvCanvas is null");
        }
    };

    return TUPRender2;

}));
