var wordsList = [];

function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true;
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false;
  });
}

window.onload = init;

/* ADD YOUR CODE BELOW */

function checkPassword() {
  var pw = document.getElementById("pw").value.toLowerCase();
  var inDictionary = false; //boolean if it matches word in dictionary

  for(var i = 0; i<wordsList.length; i++){
    if(pw == wordsList[i]){
      document.getElementById("results").innerHTML = "Weak Password, try again!";
      inDictionary = true;
      break;
    }
  }

  if(!inDictionary){
    document.getElementById("results").innerHTML = "Good Password!";
  }
}
