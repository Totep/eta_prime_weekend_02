$(document).ready(function() {
  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);
  var counter = 0;
  var array = [];
  var thing = true;
  function getData() {
      $.ajax({
      url: '/data/eta.json'
  })
    .done(function(json) {

      var data = template(json.eta[counter]);
      $('main').html(data);
      if (thing === true){
        for(var i = 0; i < json.eta.length; i++){
        array.push(json.eta[i]);
      }; thing = false;
    }
});
};
getData();
$('main').on('click', '.nextStudent', function(){
  counter++;
  if(counter > array.length -1) {
    counter = 0;
  }
  getData();
});
getData();
$('main').on('click', '.prevStudent', function(){
  counter--;
  if(counter < 0) {
    counter = 21;
  }
  getData();
});







});
