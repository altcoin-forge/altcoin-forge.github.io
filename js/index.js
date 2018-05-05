$('#home-contact').on('click',function(){
  var homeEmail = $('#home-email').val();
  if (homeEmail.length > 2) {
    sessionStorage.setItem('contactEmail', homeEmail);
  }
  window.location.href = '/conact';
})
