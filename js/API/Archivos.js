// Java Document
  function uploadPhoto(foto) {
            var options = new FileUploadOptions();
            options.fileKey="archivo";
            options.fileName="Jesus";
            options.mimeType="image/jpeg";

            var params = {};
            params.value1 = "test";
            params.value2 = "param";

            options.params = params;

            var ft = new FileTransfer();
            ft.upload(imageURI, "http://igitsoft.com/pgtest.php", function(r)
				{ navigator.notification.confirm("Datos Guardos Satisfactoriamente\n"+disp	()['platform'] + '\n' + r.response, function(botones){
				switch(botones){
					case 1:
						navigator.notification.beep(5);
						break;
					case 2:
						navigator.notification.vibrate(500);
						break;	
				}
			}, "Titulo", "Beep, Vibrar, Salir");
				}, function(err){
					navigator.notification.alert("Error:" + err.code,null, "Error de envío", "De acuerdo");
					}, options);
        }