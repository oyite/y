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