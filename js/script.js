 $(function(){

     $("#count").countMe(0, .11);
     $("#count1").countMe(0, .11);
     $("#count2").countMe(0, .11);
     $(".count_up").rCounter();
     $(".ani").animationCounter({
        start: 0,
        step: 1,
        dealy: 100
     });

     $(".ani1").animationCounter({
        step: 5,
        dealy: 100

     })

     $(".ani2").animationCounter({
        step: 56,
        dealy: 200,
     });
    
})

$(document).ready(function() {
     $(".ani_img").css({
       display:"block"
     });
     const durationImage = 1000;
     const easing ="easeOutCubic";
     const animateClipPath = (progress) => {
       const x1 = 50 - 50 * progress +"%";
       const y1 = 25 - 25 * progress +"%";
       const x2 = 50 + 50 * progress +"%";
       const y2 = 35 * (1 - progress) +"%";
       const x3 = 50 + 50 * progress +"%";
       const y3 = 75 + 25 * progress +"%";
       const x4 = 50 - 50 * progress +"%";
       const y4 = 65 + 35 * progress +"%";
       $(".ani_img").css({
         "clip-path": `polygon(${x1} ${y1}, ${x2} ${y2}, ${x3} ${y3}, ${x4} ${y4})`
       });
     };
     $({ progress: 0 }).animate({ progress: 1 }, {
       duration: durationImage,
       easing: easing,
       step: animateClipPath
     });
   });
$(".image img").click(function(){
  $("#full-img").attr("src", $(this).attr("src"));
  $(".light_img").show();
});
$(".light_img .close").click(function(){
  $(".light_img").hide();
})


wow = new WOW(
  {
  boxClass:     'wow',      
  animateClass: 'animated', 
  offset:       0,          
  mobile:       true,       
  live:         true        
}
);
wow.init();


// aos

// page3 js
parallax($('.element'), 15,true)


// page 4 jquery

$(document).ready(function() {
  $('.loadMore').loadMoreResults({

  });
})