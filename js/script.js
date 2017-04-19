window.onload = function() {

  var btnSrchOnline = document.getElementById('btnSrchOnline');
  var btnSrchTime = document.getElementById('btnSrchTime');
  var context;
  var request = new XMLHttpRequest();

    request.open('GET', 'data.json');
    request.onload = function () {
      context = JSON.parse(request.responseText);
    };
    request.send();

    btnSrchOnline.addEventListener("click", function (data) {

    var valueSrch = document.getElementById('valueSrchOnline').value;
    var areaForPaste = document.getElementById('areaForPaste')

      for (var i = 0; i < context.length; i++) {
          if (valueSrch.toLowerCase() === context.users[i].insidearena.toString()) {
            var stringPerson = "";
            stringPerson += "<h4>" + "user: " + context[i].user + "<br>" + "Time: " + context[i].timestamp + "<br>" + " Email:  " + context[i].email + "</h4>";

            areaForPaste.insertAdjacentHTML('beforeend', stringPerson);
              }
            }
          });

      btnSrchTime.addEventListener("click", function (data) {

          var valueSrch = document.getElementById('valueSrchTime').value;
          var areaForPaste = document.getElementById('areaForPaste')

            for (var i = 0; i < context.length; i++) {
              if (valueSrch.toString() === context[i].timestamp.toString()) {
                var stringPerson = "";
                stringPerson += "<h4>" + "user: " + context[i].user + "<br>" + "Time: " + context[i].timestamp + "<br>" + " Email:  " + context[i].email + "</h4>";

                areaForPaste.insertAdjacentHTML('beforeend', stringPerson);

              }
            }
          });


};
