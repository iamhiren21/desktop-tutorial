
$(document).ready(function(){
    $('.menu_toggle_btn').click(function(){
        $('.header_wrapper').toggleClass('menu_open');
        $('body').toggleClass('cm-overflow');
    });

    $('.menu_block li a').click(function(){
        $('.header_wrapper').removeClass('menu_open');
        $('body').removeClass('cm-overflow');
    })

});

$('#project_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText: ["<img src='assets/graphics/icon/right_arrow.svg'> ", "<img src='assets/graphics/icon/left_arrow.svg'>"],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
})

$('#review_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText: ["<img src='assets/graphics/icon/right_arrow.svg'> ", "<img src='assets/graphics/icon/left_arrow.svg'>"],
    responsive:{
        0:{
            items:1
        },
        992:{
            items:2
        }
    }
})

 // Back To Top Button 
 $(window).scroll(function(){ 
    if ($(this).scrollTop() > 100) { 
        $('#scroll').fadeIn(); 
    } else { 
        $('#scroll').fadeOut(); 
    } 
}); 
$('#scroll').click(function(){ 
    $("html, body").animate({ scrollTop: 0 }, 600); 
    return false; 
}); 

$(document).ready(function(){
    /*--------- Wow Js ----------*/
    
    new WOW().init();
})

// Section Redirect
$('.scrollTo').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});
