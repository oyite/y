const imgContainer = [
    {
        id: 1,
        img: "images/table/cab5.jpg",
        topic: "Wall Shelf",
        info: "It feels good to be in Home, and there’s hardly a professional greater demand in metal because WOOD Products have covered th enter House. Holding the varities of House Qualites. Nothin can be compaired to this free Zero gravity product of Wood World"
    },
    {
        id: 2,
        img: "images/table/cab2.jpeg",
        topic: "Living Room Table",
        info: "Build high-converting and effective Home strategy for your family. Get your newly wood products off the sale and start by improving your kitchen area and attract everyone every day. This free strategy offers tips that combine family."
    },
    {
        id: 3,
        img: "images/table/cab3.jpeg",
        topic: "Enjoy",
        info: "As for the child, he gave himself wholly to the enjoyment of a stick of candy. Table means to a Mother not only health, enjoyment, comfort, but knowledge.Beyond this she had little time for enjoyment, for she had so much work to do. Do her a favour by getting yours"
    },
    {
        id: 4,
        img: "images/table/cab6.jpg",
        topic: "Floor Shelf",
        info: "The only thing that could be improved about this point of purchase is the location and in this case the location is your House. This particular display is a fantastic example of a catchy and effective sound room. Who wouldn’t have their attention grabbed wood product"
    },
    {
        id: 5,
        img: "images/table/cab7.jpg",
        topic: "Mixed",
        info: "This sample display shows many great qualities as all in one. It looks like a floor King, which helps to project the customer's brand interest. Notice that it’s also very Uniqe at the back. This is a great example of using a Wood World prodcut at Home."
    },
    {
        id: 6,
        img: "images/table/cab.jpeg",
        topic: "Cabinet",
        info: "We know that wood products is more than a hobby for you it's a lifestyle. We want to be your favorite place for feeding that passion by acessing new products, getting inspired by new ideas, and connecting with other customers who feel the same way as you."
    }
];
const img = document.getElementById('img');
  const topic = document.getElementById('topic');
    const info = document.getElementById('info');
      const nextBtn = document.getElementsByClassName('next');
        const prevBtn = document.getElementsByClassName('prev');
          const bodySilde = document.getElementById('imgContainer');
let currentItem = 3;
window.addEventListener('DOMContentLoaded', function(){
    slideImage(currentItem);
});

function slideImage(woodImage){
  const imgItem = imgContainer[woodImage];
   img.src = imgItem.img;
   topic.textContent = imgItem.topic;
   info.textContent = imgItem.info;
};

bodySilde.addEventListener('click', function () {
    currentItem++;
    if(currentItem > imgContainer.length -1){
        currentItem = 0;
    };
    slideImage(currentItem);
});
//toggle bar;
const buttonbtn = document.getElementById('nav-list-button');
const ul = document.getElementById('list-ul');
// const ulList = document.getElementsByClassName('video-contents');

let ulToggle = false;
  buttonbtn.addEventListener ('click', () => {
      if (ulToggle == false) {
          ul.style.visibility = "visible";
          ul.style.opacity = "1";
          ul.style.zIndex = "1";

          ulToggle = true;

      } 
      else if (ulToggle == true) {
       ul.style.visibility = "hidden";

          ulToggle = false;
      }
  });