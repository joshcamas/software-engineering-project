var app = new Vue({
    el: '#app',
    data: {
      scanner: null,
      activeCameraId: null,
      cameras: [],
      scans: []
    },
    mounted: function () {
      var self = this;
      self.scanner = new Instascan.Scanner({ video: document.getElementById('preview'), scanPeriod: 5 });
      self.scanner.addListener('scan', function (content, image) {
        if(content !== null){
          console.log(content);
          $.ajax({
            type: "GET",
            url: "api/scan-purchase",
            data: {"qrcode" : content}, 
            success: function(response) 
            { 
                if(response.success == true)
                  console.log(response);
                else 
                {
                    console.log(response);
                    showError(response.error);
                }
            },
        });
        }
        self.scans.unshift({ date: +(Date.now()), content: content });
      });
      Instascan.Camera.getCameras().then(function (cameras) {
        self.cameras = cameras;
        if (cameras.length > 0) {
          self.activeCameraId = cameras[0].id;
          self.scanner.start(cameras[0]);
        } else {
          console.error('No cameras found.');
        }
      }).catch(function (e) {
        console.error(e);
      });
    },
    methods: {
      formatName: function (name) {
        return name || '(unknown)';
      },
      selectCamera: function (camera) {
        this.activeCameraId = camera.id;
        this.scanner.start(camera);
      }
    }
  });
  /*
  $.get("api/scan-purchase", { qrcode: content }, function (data) {
    console.log(data);
    if(data === 'success'){
      $("#alert").show()
      $("#alert").css("background-color", "green")
      $("#alert").fadeOut("slow")
    }
    else{
      $("#alert").show()
      $("#alert").css("background-color", "red")
      $("#alert").fadeOut("slow")
    }
  });
  
  */