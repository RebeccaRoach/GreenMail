console.log ('javascript is connected')



function showAlert() {
	alert("Test of popup");
}

document.getElementById("alertButton").onclick = function(){
  showAlert();
};