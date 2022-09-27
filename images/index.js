var numerOfButton = document.querySelectorAll(".drum").length;

for(var i= 0; i < numerOfButton; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){

var innerButton = this.innerHTML;
switch (innerButton) {

  case "w":
  var tom1 = new Audio("sounds/tom-1.mp3");
  tom1.play();
  break;

  case "a":
  var tom_2 = new Audio("sounds/tom-2.mp3");
  tom_2.play();
  break;

  case "s":
  var tom_3 = new Audio("sounds/tom-3.mp3");
  tom_3.play();
  break;

  case "d":
  var tom_4 = new Audio("sounds/tom-4.mp3");
  tom_4.play();
  break;

  case "j":
  var snare = new Audio("sounds/snare.mp3");
  snare.play();
  break;

  case "k":
  var crash = new Audio("sounds/crash.mp3");
  crash.play();
  break;

  case "l":
  var kick = new Audio("sounds/kick-bass.mp3");
  kick.play();
  break;

  default:console.log(innerButton);

}

  });
}

// using while loop to solve the equation
// var i= 0;
// while(i<numerOfButton){
//   document.querySelectorAll(".drum")[i].addEventListener("click",function (){
//       alert("i got click");
//      });
//      i++
// }
/////////////////////////////
// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
