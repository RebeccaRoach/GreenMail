console.log ('javascript is connected')

// 2,204.6 lbs in a metric ton
// A typical passenger vehicle emits about 4.6 metric tons of carbon dioxide per year 
// 10150.36 lbs per year = how many grams?
// 453.5924 grams per pound

function convertToHumanImpact(g) {
  const result = 300 * g

  return `You saved ${result} tons of carbon dioxide emissions!`
}

function getEmissions(numEmails) {
  const emissionsPerEmailGrams = 0.3
  const grams = emissionsPerEmailGrams * numEmails;
  return convertToHumanImpact(grams)
}

function showAlert() {
	alert("Test of popup");
}

document.getElementById("alertButton").onclick = function(){
  // hard-code 5000 emails deleted for now
  getEmissions(5000);
  showAlert();
};