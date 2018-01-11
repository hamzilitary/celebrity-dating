$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();


    if (age > 23 && gender === 'female') {
      $('#match').show();
    }
    if (age < 23 && gender === 'female') {
      $('#match2').show();
    }
    if (age > 23 && gender === 'male') {
      $('#match3').show();
    }
    if (age < 23 && gender === 'male') {
      $('#match4').show();
    }

  event.preventDefault();
});
});
