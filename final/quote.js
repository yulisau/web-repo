const quotes = ["“Be yourself; everyone else is already taken.” ― Oscar Wilde", "“It's kind of fun to do the impossible.” ― Walt Disney", "“Without music, life would be a mistake.” ― Friedrich Nietzsche, Twilight of the Idols",
  "“We accept the love we think we deserve.” ― Stephen Chbosky, The Perks of Being a Wallflower", "“It is so hard to leave—until you leave. And then it is the easiest goddamned thing in the world.” ― John Green, Paper Towns", "“Whatever you are, be a good one.” ― Abraham Lincoln", "“A person's a person, no matter how small.” ― Dr. Seuss, Horton Hears a Who!", "“Everything you can imagine is real.” ― Pablo Picasso"
];
let quotecount = 0;
//print out array in console
console.log(quotes[7]);
//quotes.length gives number of items inside array
console.log(quotes.length);


document.getElementById("newquote").addEventListener("click", buttonClicked);

function buttonClicked() {
  // alert("button clicked");
  // console.log(quotes[0]);
  console.log(quotes[quotecount]); //printing quotes on console
  document.getElementById("qtext").innerHTML = quotes[quotecount]; //printing out the changed quote to website
  if (quotecount >= 7) {
    quotecount = 0;
  } else {
    quotecount++;

  }
}
