// INIT
//var myPassword = "sdsadsa";
// From https://codepen.io/gabrielizalo/pen/oLzaqx
$( "#submit" ).click(function() {
  var myPassword = $("#passkey").val();
  $.get('info.enc.html', function(data) {
  	var decrypted = CryptoJS.AES.decrypt(data, myPassword);
  	document.getElementById("main").innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
  });
});