$("h1").addClass("big-title");
$("h1").text("Bye");
$("button").html("<b>hello</b>");


$("button").click(function(){
	
     $("h1").css("color","purple")
});
$("input").keypress(function(event){
  $("h1").text(event.key);

});
$("h1").before("<button>New</button>")
$("button").on("click",function(){
	$("h1").fadeToggle();
})

$("p").on("click",function(){
	$("h1").fadeOut();
})

$("b").on("click",function(){
	$("h1").slideToggle();
})
$("em").on("click",function(){
	$("h1").slideUp().slideDown().animate({opacity:0.5});
})
$("span").click(function(){
	$("h2").slideToggle().css("visibility","visible")
});
$("i").click(function(){
	$(".one").addClass("iss");

})
$(".two").click(function(){
	$(".one").removeClass("iss");

})
$(".three").click(function(){
 $(".one").animate({opacity:0.5});

})
$(".four").click(function(){
	$(".one").animate({opacity:5});

})