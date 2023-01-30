var i=0;
var image=[];
var time = 3000;

image[0] = "/images/galeria/1.jpg";
image[1] = "/images/galeria/2.jpg";
image[2] = "/images/galeria/3.jpg";
image[3] = "/images/galeria/4.jpg";
image[4] = "/images/galeria/5.jpg";
image[5] = "/images/galeria/6.jpg";
image[6] = "/images/galeria/7.jpg";
image[7] = "/images/galeria/8.jpg";
image[8] = "/images/galeria/9.jpg";
image[9] = "/images/galeria/10.jpg";
image[10] = "/images/galeria/11.jpg";
image[11] = "/images/galeria/12.jpg";
image[12] = "/images/galeria/13.jpg";
image[13] = "/images/galeria/14.jpg";
image[14] = "/images/galeria/15.jpg";
image[15] = "/images/galeria/16.jpg";
image[16] = "/images/galeria/17.jpg";
image[17] = "/images/galeria/18.jpg";
image[18] = "/images/galeria/19.jpg";
image[19] = "/images/galeria/20.jpg";

function changeImg(){
  document.slide.src = image[i];

  if(i < image.length - 1){
    i++;
  } else{
    i = 0
  }
  setTimeout("changeImg()", time);
}

window.onload = changeImg;