$(document).ready(function() 
{
    $(".shape_index_circle").addClass('shape_index_circle--active');
    $(".home_screen").addClass('home_screen--active');
    $(".home_title").addClass('home_title--active');

    $(".icon-arrow").click(function() {
        $('html, body').animate({
            scrollTop: $(".home_titles_animation").offset().top
            }, 1000);
    });
   
})


$(document).scroll(function scrollTitles(){

    if (window.scrollY > ($(".home_title").offset().top)) {
    
        $(".home_title_subtitle").addClass('home_title_subtitle--active');
    }
 })


