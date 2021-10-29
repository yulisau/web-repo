// creating populated tabs

// let meals = ["lunch", "dinner", "brunch"];
let days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
// let images = [ "lunch.jpg", "dinner.jpg","brunch.jpg"];
let prevday;

for(i=0;i<document.getElementsByClassName("day").length;i++){
  // console.log(days[i]); //checking that our loop goes through
  document.getElementsByClassName('day')[i].innerHTML = "<h2>" + days[i] + "</h2>"; //adding the meals in h2
  document.getElementsByClassName("day")[i].addEventListener('click', setActive, false); //adding an event listener of click to every tab using class meal

  document.getElementsByClassName("day")[i].id = days[i]; //getting elements by class name and adding the id of lunch, dinner, brunch

}
document.getElementById('Mon').classList.toggle('active'); //having lunch active on start up
// document.getElementById("image").innerHTML = "<img src= 'assets/" + images[0] + "' >";

function setActive(event){ //using the event target to know whether we're clicking on an h2 or div and impacting both independently
  // console.log('clicked');

prevday = document.getElementsByClassName('active')[0].id;
if(prevday == undefined){
  document.getElementById(prevday).classList.toggle("active");
  document.getElementById(prevday + "menu").style.display = "none"; //changing display text on the menu, blocking the previous one
}

  // console.log(event.target.innerHTML);

  if(event.target.tagName == "H2"){
     console.log("h2 clicked");//testing
    event.target.parentNode.classList.toggle("active");
  }else{
     console.log('div clicked');//testing
    event.target.classList.toggle("active");
  }


 let day = document.getElementsByClassName("active")[0].id;
 // console.log(meal);
 document.getElementById(day + "menu").style.display = "block";
  // document.getElementById('image').innerHTML = "<img src='assets/" + day + ".jpg'>";
}

// // for button:
// function setActiveButton(event){
//   event.target.classList.toggle("active");
// }
