$(document).ready(function() 
{
    $(".shape_index_circle").addClass('shape_index_circle--active');
    $(".home_screen").addClass('home_screen--active');
    $(".home_title").addClass('home_title--active');
   
})


$(document).scroll(function scrollTitles(){

    if (window.scrollY > ($(".home_title").offset().top)) {
    
        $(".home_title_subtitle").addClass('home_title_subtitle--active');
    }
 })


