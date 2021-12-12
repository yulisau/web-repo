console.log("hello world")

let pics = 9;
let pic;

for(i=0;i<pics;i++){
  pic = 1+i;
document.getElementById('gallery').innerHTML += "<img src='assets/gallery/" + pic + ".png'" + "class='portfoliopic' id='pic" + pic+ "' />";
}
