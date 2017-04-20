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

    var valueSrch = document.getElementById('valueSrchOnline').value;
    var users = context.users;

    for(var i in users) {
      if (valueSrch.toLowerCase() === users[i].insidearena.toString()) {
        var stringPerson = "";
        stringPerson += "<h4>" + " Email:  " + users[i].email + "</h4>";

        areaForPaste.insertAdjacentHTML('beforeend', stringPerson);
      }
    }
    function btn() {
      var input = document.createElement('input');

      edit.id = 'edit'
      edit.type = 'button'
      edit.value = 'random'

      areaForPaste.appendChild(input);
    }
    btn();
  });
  btnSrchTime.addEventListener("click", function (data) {

    var valueSrch = document.getElementById('valueSrchTime').value;
    var users = context.users;
    for(var i in users) {
      if (valueSrch.toLowerCase() === users[i].timestamp.toLowerCase()) {
        var stringPerson = "";
        stringPerson += "<h4>" + " Email:  " + users[i].email + "</h4>";

        areaForPaste.insertAdjacentHTML('beforeend', stringPerson);
      }
    }
  });





};
