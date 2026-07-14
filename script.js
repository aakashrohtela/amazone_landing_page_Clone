

const slider=document.getElementById("productSlider");

function slideRight(){

slider.scrollBy({

left:900,

behavior:"smooth"

});

}

function slideLeft(){

slider.scrollBy({

left:-900,

behavior:"smooth"

});

}
