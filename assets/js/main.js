window.onload = hora;  
        fecha = new Date("19 Jan 2023 10:19:02");
          function hora() {
          // En IE no está soportado otro timezone que no sea UTC
          try {
            var dateString = new Date().toLocaleString("es-ES", {timeZone: "Europe/Madrid"});
          } catch (e) {
            var dateString = new Date().toLocaleString("es-ES");
          }
          //var dateString = new Date().toLocaleString("es-ES", {timeZone: "Europe/Madrid"});
        document.getElementById('hora').innerHTML = dateString;
        }

        setInterval(hora, 1000);
          $(document).on('click', "#userProfileId li", function () {
            var rol = $(this).attr('value');
          $.post("/change-rol/change-rol-for-user/", {rol: rol}, function (data) {
          }).success(function () {
            window.location.reload();
           });
         });
