//toggle bar;
const buttonbtn = document.getElementById('nav-list-button');
const ul = document.getElementById('list-ul');

let ulToggle = false;
  buttonbtn.addEventListener ('click', () => {
      if (ulToggle == false) {
          ul.style.visibility = "visible";
          ul.style.width = "100%";
          ul.style.height = "20rem";
          ul.style.opacity = "1";
          ul.style.zIndex = "1";

          ulToggle = true;

      } 
      else if (ulToggle == true) {
       ul.style.visibility = "hidden";

          ulToggle = false;
      }
  });
//   image slider

const imageImg = document.getElementById('imageImg');
const image = new Array(
    "../images/table/bottleholder.jpeg",
    "../images/table/bookholder2.jpeg",
    "../images/table/lovesign.jpeg",
    "../images/table/flowerholder.jpeg",
    "../images/table/table1.jpeg"
);
const len = image.length;
let i = 0;
  
function Slider(){
    if(i > len-1){
        i = 0;
    }
    imageImg.src = image[i];
    i++;
    setTimeout('Slider()', 3000);
   } ;

window.addEventListener('DOMContentLoaded', ()=>{
    Slider();
});