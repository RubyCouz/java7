//déclaration de la fonction
function number(){
  //définition des variables
  var shoeSize = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;
  var regexSize = /^[2-5][0-9]$/;
  var regexBirth = /^(?:19|20)[0-9]{2}$/;
  var result = ((((shoeSize * 2) + 5) * 50) - yearOfBirth) + 1766;
  if ((regexSize.test(shoeSize) == true) && (regexBirth.test(yearOfBirth) == true))
 {
    alert('resultat : ' + result);
  }else{
    alert('recommencez votre saisie');
}
}
