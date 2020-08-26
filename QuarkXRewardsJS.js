// Change style of navbar on scroll
  window.onscroll = function() {myFunction()};
  function myFunction() {
      var navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
          navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
      } else {
          navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
      }
  }
  
  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
      } else {
          x.className = x.className.replace(" w3-show", "");
      }
  }



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
  