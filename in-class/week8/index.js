// console.log("hello worlds")


//how to make a random number
// console.log(Math.random()); //random number between 0-1
// console.log( Math.floor(Math.random()*10)); //random whole number between 0-10

//populate images into document
// console.log(document.getElementsByClassName("options"));
// console.log( document.getElementsByClassName("options")[0].innerHTML); //prints the html we have in this class to the console

//making an array to loop through the images
const images = ["pizza.jpg", "burrito.jpg", "sushi.jpg"];
const title = ["pizza", "burrito", "sushi"];

// for(i=0;i<3;i++); //same thing as below but not recommended

for (i = 0; i < document.getElementsByClassName("options").length; i++) {
  //console.log(document.getElementsByClassName("options")[i].innerHTML); //printing out the elements in each option div
  // another way to accsess HTML from javascript; having the images align with their appropriate title spot
  document.getElementsByClassName('label')[i].innerHTML = title[i];

  // adding images into divs

  //simple/one image
  // document.getElementsByClassName("options")[i].innerHTML += '<img src="assets/pizza.jpg">';
  //multiple images
  document.getElementsByClassName("options")[i].innerHTML += '<img src="assets/' + images[i] + ' ">';

  // document.getElementsByClassName('options')[i].addEventListener("click", function(){alert("you clicked a div")}); //testing

  //set the id of each section
  document.getElementsByClassName("options")[i].setAttribute("id", title[i]);
  //call changeColor with the ID of the section when clicked
  document.getElementsByClassName('options')[i].addEventListener("click", function() {
    changeColor(this.id)
  });
}

function changeColor(sectionID) {
  // console.log(sectionID); //testing, should see name of id
  document.getElementById(sectionID).classList.toggle("blue"); //toggles to blue,,, back to pink,,, pretty sick
}
