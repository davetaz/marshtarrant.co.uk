// INIT
//var myPassword = "sdsadsa";

$( "#submit" ).click(function() {
  var myPassword = $("#passkey").val();
  console.log('hello');
  console.log(myPassword);
  $.get('info.enc.html', function(data) {
  	var decrypted = CryptoJS.AES.decrypt(data, myPassword);
  	document.getElementById("main").innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
  });
});