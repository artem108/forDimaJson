window.onload = function() {

  var btnSrchOnline = document.getElementById('btnSrchOnline');
  var btnSrchTime = document.getElementById('btnSrchTime');
  var areaForPaste = document.getElementById('areaForPaste')
  var context;
  var request = new XMLHttpRequest();

    request.open('GET', 'data.json');
    request.onload = function () {
      context = JSON.parse(request.responseText);
    };
    request.send();
    btnSrchOnline.addEventListener("click", function (data) {
        createButton();
        var valueSrch = document.getElementById('valueSrchOnline').value;
        var users = context.users;

        for(var key in users) {
            if (valueSrch.toLowerCase() === users[key].insidearena.toString()) {

                areaForPaste.innerHTML += "<h4>" + " Email:  " + users[key].email + "</h4>";



                var getRandom = document.getElementById('randomBtn')

                var arr = new Array();
                arr = users[key].email;
                getRandom.onclick = function getRandomUser() {



                  console.log(arr);


                }
              }

            }
          });



    btnSrchTime.addEventListener("click", function (data) {
      createButton();
      var valueSrch = document.getElementById('valueSrchTime').value;
      var users = context.users;
      for(var key in users) {
          if (valueSrch.toLowerCase() === users[key].timestamp.toLowerCase()) {

              areaForPaste.innerHTML += "<h4>" + " Email:  " + users[key].email + "</h4>";
      }
    }
  });

   function createButton() {
    var input = document.createElement('input');
    input.id = 'randomBtn'
    input.type = 'button'
    input.value = ' get random user'
    areaForPaste.appendChild(input);
  }















};
