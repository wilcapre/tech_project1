/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*
 This program will require students to get quotes to print out output.  
 Quotes are taking from different sites, also needs to provide with names,
 provide with their webpages and provide with year it was written.
 */



var quotes = [

{
quote: 'so many books, so little time',
citation: 'wwww.quotes.yourdictionary.com',
source: 'Frank Zappa',
year: '1990',
category: ' Education'
},

{
quote: 'Be the change that you wish to see in the world .',
citation:'www.mkgandhi.org',
source: 'Mahatma Ganghi',
year: '1921',
category: ' Inspirational'
},

{
quote: 'The only thing we have to fear is fear itself.',
citation: 'www.brainyquote.com',
source: 'Franklin D. Roosevelt',
year:'1945',
category: ' Inspirational'
},

{
quote: 'Learning never exhausts the mind.',
citation: 'https://www.brainyquote.com',
source: 'Leonardo da Vinci',
year: '1519',
category: ' Inspirational'
},


{
quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
citation:'https://wwww.brainyquote.com',
source: 'Mahatma Gandhi',
year: '1948',
category: ' Inspirational'
}

];


/*
  Function getRandomQuote from quote_one to quote_five
  if quote matches the author's name, the quotation will be displayed;
  if quote doesn't matche the author's name, the quotation will not be displayed;
  print quotes " quotes display with author's name"
*/
  
function getRandomQuote () {


  var randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote]

}




/***
  This section finishing up the project by showing different background.
  When the quote changes, randomly change the background color of the page.
***/


 
function randomPRB() {
  return Math.floor(Math.random() * 256);
}

function randomColors() {
  var color = 'rgb(';
  color += randomPRB() + ',';
  color += randomPRB() + ',';
  color += randomPRB() + ')';

  return color;
}

/***
 This section will show the changes of the quote every 10 sec.
***/
setInterval( printQuote,10000);

/***
  Using getRamdomQuote to call  printQuote function to return it string values. 
  when call the quote and source function it will return it's  value if it is true,
  but if it's not true the value will not return
***/


function printQuote (){


var list = getRandomQuote ();

var elements = "";


elements += '<p class = "quote" >' + list.quote + "</p>";
elements += '<p class= "source" >' + list.source + "</p>";

if (list.citation ) {
  elements += '<span class="citation">' + list.citation + "</span>";
}

if (list.year ) {
  elements += '<span class="year">' + list.year +  "</span>";
}

if (list.category ) {
  elements += '<span class="category">' + list.category +  "</span>";

}

elements += "</p>";


var quoteOuput = document.getElementById("quote-box"); 

quoteOuput.innerHTML = elements;

document.body.style.backgroundColor = randomColors();


}


document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.