$('.one').on('click', function(){
  $(this).addClass('up'); 
});
$('.two').on('click', function(){
  $(this).addClass('down'); 
});
$('.three').on('click', function(){
  $(this).addClass('right'); 
});
$('.four').on('click', function(){
  $(this).addClass('left'); 
});
$('.five').on('click', function(){
  $(this).addClass('up'); 
});
$('.six').on('click', function(){
  $(this).addClass('down'); 
});

var $body = $('body');
var $heart = $('#heart-svg');
var $littleHeart1 = $("#little-heart1");
var $littleHeart2 = $("#little-heart2");
var $littleHeart3 = $("#little-heart3");
var $littleHeart4 = $("#little-heart4");
var $littleHeart5 = $("#little-heart5");
var $littleHeart6 = $("#little-heart6");
var $littleHeart7 = $("#little-heart7");
var $littleHeart8 = $("#little-heart8");
var $littleHeart9 = $("#little-heart9");
var $littleHeart10 = $("#little-heart10");

var $heartArray = [$littleHeart1,$littleHeart2,$littleHeart3,$littleHeart4,$littleHeart5,$littleHeart6,$littleHeart7,$littleHeart8,$littleHeart9,$littleHeart10,];

var $headingText = new SplitText(".heading", {type:"chars"});
var $love = $('.love');
var $loveContainer = $(".love-container");
var $heading = $(".heading");

TweenMax.to($heart, 1, {autoAlpha: 1});

heartBeat($heart, 0.15, 0.25, 1);

$heart.on('click', function(){
    if(!$body.hasClass('is-animating')){
      var littleHeartTimeline = new TimelineMax();
      littleHeartTimeline
        .set($body, {className:'+=is-animating'});
        littleHeart($littleHeart1, 5, 0);
        littleHeart($littleHeart2, 4, 3);
        littleHeart($littleHeart3, 4, 1);
        littleHeart($littleHeart4, 4, 2); 
        littleHeart($littleHeart5, 3, 0.5);  
        littleHeart($littleHeart6, 3, 1.5);  
        littleHeart($littleHeart7, 4, 1);  
        littleHeart($littleHeart8, 7, 0.25);  
        littleHeart($littleHeart9, 5, 0.75);  
        littleHeart($littleHeart10, 4, 2);  

      littleHeartTimeline
        .to($loveContainer, 1, {autoAlpha: 1})
        .fromTo($love, 1, {autoAlpha: 1}, {autoAlpha: 0}, '+=1')
        .set($heading, {className:'-=invisible'}, '-=1')
        .staggerFromTo($headingText.chars, 1, {autoAlpha:0, rotationY: 180}, {autoAlpha: 1, rotationY: 0}, '0.1', '-=1')
        .staggerFromTo($headingText.chars, 0.5, {autoAlpha:1, rotationY: 0}, {autoAlpha: 0, rotationY: 120}, '0.1', "=+1")
        .set($heading, {className:'+=invisible'})
        .set($loveContainer, {autoAlpha: 0})
        .set($heartArray, {css:{top: '100%'}})
        .set($body, {className:'-=is-animating'});
    }
});

function littleHeart(variable, second1, time){
  var littleHeartTimeline = new TimelineMax();
  littleHeartTimeline
    .to(variable, second1, {css:{top:'-40%'}, ease:Linear.easeNone}, time)
    .fromTo(variable, 2, {autoAlpha: 0}, {autoAlpha: 1}, time);
}

function heartBeat(variable, time1, time2, time3){
  var heartTimeline = new TimelineMax({repeat: -1});
  heartTimeline
  .to(variable, time1, {scale: 1.5})
  .to(variable, time2, {scale: 1})
  .to(variable, time1, {scale: 1.5})
  .to(variable, time3, {scale: 1});
}