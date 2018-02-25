// INIT
// From https://codepen.io/gabrielizalo/pen/oLzaqx
$( document ).ready(function() {
	if (localStorage.getItem('CMPassKey')) {
		var myPassword = localStorage.getItem('CMPassKey');
		unlockPage(myPassword);
	}
	/*
	$.get('info2.raw.html', function(data) {
		  var encrypted = CryptoJS.AES.encrypt(data, "");
  		//var decrypted = CryptoJS.AES.decrypt(data, myPassword);
  		document.getElementById("main").innerHTML = encrypted;
  	});
  */
});

$( "#submit" ).click(function() {
  var myPassword = $("#passkey").val();
  localStorage.setItem("CMPassKey",myPassword);
  unlockPage(myPassword);
});

function unlockPage(myPassword) {
  $.get("info.enc.html", function(data) {
  	try {
  		var decrypted = CryptoJS.AES.decrypt(data, myPassword);
  		var output = decrypted.toString(CryptoJS.enc.Utf8);
  		document.getElementById("main").innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
  	} catch (err) {
  		$.get("info2.enc.html", function(data) {
  			try {
  				var decrypted = CryptoJS.AES.decrypt(data, myPassword);
  				var output = decrypted.toString(CryptoJS.enc.Utf8);
  				document.getElementById("main").innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
  			} catch (err) { localStorage.removeItem("CMPassKey"); console.log(err); }
  		});
  	}
  });
}



  