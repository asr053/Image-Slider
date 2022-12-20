let flag = 0;

function controller(x){
    flag = flag + x;
    if(flag<0)flag=3;
    if(flag==4)flag=0;
    slideshow(flag);
}

slideshow(flag);
function slideshow(num){
    let slides = document.getElementsByClassName('slide');
    for(let y of slides){
        y.style.display="none";
    }
    slides[num].style.display = "block";
}