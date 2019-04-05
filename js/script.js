/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*
 This program will reqquest students to get quotes to print out output.  
 Quotes are taking from different sites, also needs to provide with names,
 provide with their webpages and provide with year it was written.
 */



var quotes=[

{
quote: 'so many books, so little time',
source: 'wwww.quotes.yourdictionary.com',
citation: 'Frank Zappa',
year: '1990'
},

{
quote: 'Be the change that you wish to see in the world .',
source: 'www.mkgandhi.org',
citation: 'Mahatma Ganghi',
year: '1921'
},

{
quote: 'The only thing we have to fear is fear itself.',
source: 'www.brainyquote.com',
citation: 'Franklin D. Roosevelt',
year:'1945'
},

{
quote: 'Learning never exhausts the mind.',
source: 'https://www.brainyquote.com',
citation: 'Leonardo da Vinci',
year: '1519'
},


{
quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
source: 'https://wwww.brainyquote.com',
citation: 'Mahatma Gandhi',
year: '1948'
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
console.log(getRandomQuote());

/***
  Using getRamdomQuote to call  printQuote function to return it string values. 
  when call the quote and source function it will return it's  value if it is true,
  but if it's not true the value will not return
***/


function printQuote (){


var list = getRandomQuote ();

var elements = "";


elements += '<p class = "quote" >' + list.quote + "</p>";
elements += '<p class= "source" >' + list.source;
if (quotes.citation ) {
  elements += '<span class="citation">' + list.citation + "</span>";
}
if (quotes.year ) {
  elements += '<span class="year">' + list.year +  "</span>";

}
elements += "</p>";


var quoteOuput = document.getElementById("quote-box"); 
quoteOuput.innerHTML = elements;

}


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/


document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.