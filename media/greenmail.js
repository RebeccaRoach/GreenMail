console.log ('javascript is connected')

// 2,204.6 lbs in a metric ton
// A typical passenger vehicle emits about 4.6 metric tons of carbon dioxide per year
// 10150.36 lbs per year = how many grams?
// 453.5924 grams per pound

function convertToHumanImpact(g) {
  const result = 2 * g

  return `You saved ${result} tons of carbon dioxide emissions!`
}

function getEmissions(numEmails) {
  const emissionsPerEmailGrams = 0.3
  const grams = emissionsPerEmailGrams * numEmails;
  return convertToHumanImpact(grams)
}

function showAlert(num) {
  alert(getEmissions(num));
}

document.getElementById("alertButton").onclick = function(){
  // hard-code 5000 emails deleted for now
  showAlert(480);
};

document.getElementById("alertButton2").onclick = function(){
  // hard-code 5000 emails deleted for now
  showAlert(98);
};

//tabs
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

 // Get the element with id="defaultOpen" and click on it
 document.getElementById("defaultOpen").click();
