

$('#namebut').on('click', function(e) {
  var val = $('input[placeholder="Enter your name"]').val();
  if (val === "") {
    e.preventDefault();
  }
  $(this).fadeOut();
  $(this).parent().html('<button id="namebut" class="btn btn-success" type="button"><span class="glyphicon glyphicon-ok"></span></button>');
  $('input[placeholder="Enter your name"]').css('border-color', 'green');
  $('input[placeholder="Enter your name"]').attr('disabled', 'disabled');
  $('.progress').html(
    '<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width:20%">'+
      '20% Complete (success)'+
    '</div>'
  );
  $('#email-div').toggleClass('hidden');
});


$('#emailbut').on('click', function(e) {
  var val = $('input[placeholder="Enter your e-mail"]').val();
  if (val === "") {
    e.preventDefault();
  }
  $(this).fadeOut();
  $(this).parent().html('<button id="emailbut" class="btn btn-success" type="button"><span class="glyphicon glyphicon-ok"></span></button>');
  $('input[placeholder="Enter your e-mail"]').css('border-color', 'green');
  $('input[placeholder="Enter your e-mail"]').attr('disabled', 'disabled');
  $('.progress').html(
    '<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:40%">'+
      '40% Complete (success)'+
    '</div>'
  );
  $('#rating-div').toggleClass('hidden');
});


$('#rating-sel').on('change', function() {
  $(this).css('border-color', 'green');
  $(this).attr('disabled', 'disabled');
  $('.progress').html(
    '<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width:60%">'+
      '60% Complete (success)'+
    '</div>'
  );
  $('#review-div').toggleClass('hidden');

});


$('#review').on('input', function(e) {

  var val = $('#review').val();
  if (val=== "") {
    $(this).removeClass('green-border');
    $('.progress').html(
      '<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width:60%">'+
        '60% Complete (success)'+
      '</div>'
    );
    $('#check-div').addClass('hidden');
    e.preventDefault();
  }

  $(this).addClass('green-border');
  $('.progress').html(
    '<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:80%">'+
      '80% Complete (success)'+
    '</div>'
  );
  $('#check-div').removeClass('hidden');
});


$('input[type="checkbox"]').on('click', function() {
  $('.progress').html(
    '<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">'+
      '100% Complete (success)'+
    '</div>'
  );
  //$('#sub').click();
  $('#formi').submit();

});


$('#formi').on('submit', function(e) {
  console.log('e');
  $('#formi').fadeOut('slow');

  $('#void').html('<div class="green"><span id="big" class="glyphicon glyphicon-thumbs-up"></span></div>');

  e.preventDefault();

});
