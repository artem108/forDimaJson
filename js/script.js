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
  });
  btnSrchOnline.onclick = function createButton() {
      var input = document.createElement('input');
            input.id = 'random'
            input.type = 'button'
            input.value = ' get random user'
        areaForPaste.appendChild(input);

      var getRandom = document.getElementById('random');

      getRandom.onclick = function createButton() {
          console.log(h2);
      }
}
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
