   
 /*$(window).scroll(function(){
     if($(window).scrollTop() >= 620){
          $('.header').addClass('fixed-header');
     }
     else {
         $('.header').removeClass('fixed-header');
     }
 });  
*/




$(window).scroll(function() {
    
    if ($(this).scrollTop() < $('section[class="home-slider"]').offset().top) {
        console.log( $('section[class="join-devnagri"]').offset().top);
        console.log($(this).scrollTop());
       $('.fixed').addClass('active');
       
    }
    else if ($(this).scrollTop() >= $('section[class="join-devnagri"]').offset().top) {
       console.log( $('section[class="join-devnagri"]').offset().top); 
      $('.fixed').removeClass('active');
      $('.fixed').addClass('active1');
    }
    else if ($(this).scrollTop() >= $('section[class="process-devnagri"]').offset().top) {
        alert($('section[class="process-devnagri"]').offset().top) ;
      $('.fixed').removeClass('active1');
      $('.fixed').addClass('active2');
    }
    else if ($(this).scrollTop() >= $('section[class="joint-commity"]').offset().top) {
      $('.fixed').removeClass('active2');
      $('.fixed').addClass('active3');
    }
  

});


