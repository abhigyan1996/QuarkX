$(document).ready(function(){
    $('.sidenav').sidenav();
  });
        
    $(document).ready(function(){
    $('.parallax').parallax();
  });  
    $(document).ready(function(){
    $('.carousel').carousel();
    setInterval(function() {
    $('.carousel').carousel('next');
  }, 4500);
    
  });
  $(".dropdown-trigger").dropdown();

  $(document).ready(function(){
    $('.modal').modal();
  });

  $(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });


  $(document).ready(function(){
    $(".fivek").click(function(){
      $("#div1").load("fivek.html");
    });
  });


  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
  