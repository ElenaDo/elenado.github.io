const $alert = $('div.alert')

$('form').submit(function(event){
  event.preventDefault();
  $alert.removeClass('form-display');
  var url = $(this).attr("action"); //get form action url
  var data = $(this).serialize(); //Encode form elements for submission
  
  $.post( url, data,
    (response) => {
    $alert.addClass('alert-success')
      .removeClass('alert-danger')
      .text(response);
    $("form")[0].reset();
  })
});

$( document ).ajaxError(function() {
  $alert.addClass('alert-danger');
  $alert.text( "Your message has not been sent. Please try again later." );
});