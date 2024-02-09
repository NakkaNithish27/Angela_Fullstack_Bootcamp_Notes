//1
//javascript library,reduces the javascript code
document.querySelector("h1") /*can simply written as*/ jQuery("h1") or $("h1")

//2
//HOW TO INCORPORATE jQuery INTO WEBSITES
//by adding CDN from official jQuery website(google cdn is reccomended cuz of its popularity)
//jQuery cdn must be placed above js script tag,other wise wont work
//if we put both script tags inside head then we need to write
$(document).ready(function() {
  $("h1").css("color", "red");
});

//3
//HOW MINIFICATION WORKS TO REDUCE FILE SIZE
//www.minifier.org
//it removes all the comments and spaced from our code to minify it.
//minified files extension is like .min.js , .min.css like that.

//4
//SELECTING ELEMENTS WITH JQUERY
$("h1") or jQuery("h1") //  document.querySelector("h1")
$("button"); //  document.querySelectorAll("h1")

//5
//MANUPULATING STYLES WITH jQuery
$("h1").css("color") //single value means getting the value
rgb(255, 0, 0)
$("h1").css("font-size");
32 px
$("h1").css("color", "red"); //double value means setting the value

$("h1").addClass("big-title"); //adding a class
$("h1").removeClass("big-title");
$("h1").hasClass("big-title");

//6
//MANUPULATING TEXT WITH jquery
$("h1").text("Nakka"); // equal to .textContent  //adding text
$("h1").html("<em><strong>Nakka</strong><em>"); // equal to .innerHtml     //adding html

//7
//MANUPULATING ATTRIBUTES WITH jquery
$("img").attr("src") //getting the value of attribute
$("a").attr("href", "https://www.yahoo.com") //setting the value of attribute

//8
//ADDING EVENT LISTENERS WITH jQuery

for (var i = 0; i < 5; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    document.querySelector("h1").style.color = "purple";
  });
} //is equal to

$("button").click(function() {
  $("h1").css("color", "purple"); //No need of for loop,jQuery adds event listener to all of the buttons
})

$("input").keydown(function(event) {
  console.log(event.key); //here the listener is the input element
})

$(document).keydown(function(event) { //document dont need double codes
  $("h1").text(event.key + " ")
})

$(document).on("keydown", function(event) { //Even more flexible way of adding eventlistener using on()
  $("h1").text(event.key + " ")
})

//9
//ADDING AND REMOVING ELEMENTS WITH jQuery
$("h1").before("<button>Button</button>") //adds button before <h1></h1> element
$("h1").after("<button>Button</button>") //adds button after <h1></h1> element
$("h1").prepend("<button>Button</button>") //adds button like this <h1><button></button> H1 </h1> element
$("h1").append("<button>Button</button>") //adds button like this <h1> H1 <button></button></h1> element

$('button').remove(); //removes all the buttons on the page

//10
//WEBSITE ANIMATIONS WITH jQuery
$("button").click(function() {
  // $("h1").hide();
  // $("h1").show(300);
  // $("h1").fadeOut();
  // $("h1").fadeIn();
  // $("h1").toggle();
  // $("h1").fadeToggle();
  // $("h1").slideUp();
  // $("h1").slideDown();
  // $("h1").slideToggle();
  //  $("h1").animate({opacity:0.5,margin:"20%"});  //we can only add css properties with numeric values, ex:color:red is not possible
  // $("h1").slideUp().slideDown().animate({opacity:0.5});  //chaining multiple animations to single element
})
