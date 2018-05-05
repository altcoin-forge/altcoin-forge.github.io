$(function(){
  var homeEmail = sessionStorage.getItem('contactEmail');
  if (homeEmail.length > 2) {
    $('#contactEmail').val(homeEmail)
    sessionStorage.setItem('contactEmail', '');
  }
})
