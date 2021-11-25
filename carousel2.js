var slideIndex2 = 0;
showSlides2();

function showSlides2() {
    var j;
    var slides2 = document.getElementsByClassName("mySlides2");
    var dots2 = document.getElementsByClassName("dot2");
    for (j = 0; j < slides2.length; j++) {
      slides2[j].style.display = "none";  
    }
    slideIndex2++;
    if (slideIndex2 > slides2.length) {slideIndex2 = 1}    
    for (j = 0; j < dots2.length; j++) {
      dots2[j].className = dots2[j].className.replace(" active", "");
    }
    slides2[slideIndex2-1].style.display = "block";  
    dots2[slideIndex2-1].className += " active";
    setTimeout(showSlides2, 3000); // Change image every 3 seconds
}