// creating populated tabs

let meals = ["lunch", "dinner", "brunch"];
let images = [ "lunch.jpg", "dinner.jpg","brunch.jpg"];
let prevmeal;

for(i=0;i<document.getElementsByClassName("meal").length;i++){
  // console.log(meals[i]); //checking that our loop goes through
  document.getElementsByClassName('meal')[i].innerHTML = "<h2>" + meals[i] + "</h2>"; //adding the meals in h2
  document.getElementsByClassName("meal")[i].addEventListener('click', setActive, false); //adding an event listener of click to every tab using class meal

  document.getElementsByClassName("meal")[i].id = meals[i]; //getting elements by class name and adding the id of lunch, dinner, brunch

 //for buttons:
  // document.getElementById("one").addEventListener('click', setActiveButton, false);
  // document.getElementById("two").addEventListener('click', setActiveButton, false);
}
document.getElementById('lunch').classList.toggle('active'); //having lunch active on start up
document.getElementById("image").innerHTML = "<img src= 'assets/" + images[0] + "' >";

function setActive(event){ //using the event target to know whether we're clicking on an h2 or div and impacting both independently
  // console.log('clicked');

prevmeal = document.getElementsByClassName("active")[0].id;
if(prevmeal != undefined){
  document.getElementById(prevmeal).classList.toggle("active");
  document.getElementById(prevmeal + "menu").style.display = "none"; //changing display text on the menu, blocking the previous one
}

  // console.log(event.target.innerHTML);

  if(event.target.tagName == "H2"){
    // console.log("h2 clicked");//testing
    event.target.parentNode.classList.toggle("active");
  }else{
    // console.log('div clicked');//testing
    event.target.classList.toggle("active");
  }


 let meal = document.getElementsByClassName("active")[0].id;
 // console.log(meal);
 document.getElementById(meal + "menu").style.display = "block";
  document.getElementById('image').innerHTML = "<img src='assets/" + meal + ".jpg'>";
}

// // for button:
// function setActiveButton(event){
//   event.target.classList.toggle("active");
// }
