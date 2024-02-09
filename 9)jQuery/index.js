$("button").click(function(){
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
$("h1").slideUp().slideDown().animate({opacity:0.5});  //chaining multiple animations to single element
})
