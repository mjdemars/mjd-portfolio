var slideIndex2 = 0;
showSlides2();

function showSlides2() {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    var dots = document.getElementsByClassName("dot2");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex2-1].style.display = "block";  
    dots[slideIndex2-1].className += " active";
    setTimeout(showSlides2, 3000); // Change image every 3 seconds
}