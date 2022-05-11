var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//const randomNum = array[Math.floor(Math.random() * array.length)];
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
const options= ['a', 'b', 'c', 'd']
var cri_list = []
var password_list = ""
var cri_random = []
function generatePassword() {
  var user_criteria = window.prompt("Choose Password Criteria \na:lowercase b:uppercase c:numeric d:special characters q:quit")
  while (user_criteria !== 'q'){
    if (options.includes(user_criteria)) {
      cri_list.push(user_criteria);
    } else {
      alert("invalid input");
    }
    if (cri_list.length == 4){
      break
    }
    user_criteria = window.prompt("Choose Password Criteria \na:lowercase b:uppercase c:numeric d:special characters q:quit")
  }
  if (cri_list != 0){
    var letterLength = window.prompt('Choose Length of Password (8-128)')
  

    if (7 < parseInt(letterLength)&& parseInt(letterLength)<129){
      for (var i = 0; i < letterLength; i++){
        var selected_cri = selectRandom(cri_list); 
        if (selected_cri == 'a'){
          selected_cri = lower 
        } else if (selected_cri == 'b'){
          selected_cri = upper
        } else if(selected_cri =='c'){
          selected_cri = number
        } else if (selected_cri =='d'){
          selected_cri = special
        }
        password_list = password_list + selectRandom(selected_cri);
        
      }} else {
        alert("invalid input");
      }
    }else {
      alert("You need to select at least one criteria!");
    }
    for (let i in password_list){

    }
  
  return password_list
}
function selectRandom(arrays) {
  const random = Math.floor(Math.random() * arrays.length);
  return arrays[random];

function checkpassword(string){
  for (let i in string){
    
  }
}
}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




