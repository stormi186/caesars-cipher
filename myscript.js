var convertButton = document.getElementById("convert");

function rot13(str) { 
  str = str.replace(/([A-M])|([N-Z])/g, function(letter, p1, p2) {
    switch(letter) {
      case p1:    
        return String.fromCharCode(letter.charCodeAt(0) + 13);
      case p2:
        return String.fromCharCode(letter.charCodeAt(0) - 13);
    }
  });
  return str;
}

convertButton.addEventListener("click", function() {
  var sentence = document.getElementById("text").value;
  document.getElementById('converted-sentence').innerHTML = rot13(sentence);
});

