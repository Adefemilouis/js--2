// local reviews data
const reviews = [
    {
        id:1,
        name: "susan smith",
        job: "web developer",
        img:
        "and.jpg",
        text:
        "I'm baby meggings twee health goth +1. Biscyle rights tumeris chaerr thatb thbbbb yhhhb id tb bb",
    },
    {
       id: 2,
       name: "Anne Johnson",
       job: "web designer",
       img: "art.jpg",
        text:
       "the name of the motherfukerr is nsuposee to be a dood man byt banyways we gatther dey sha no nleee every wherre good",
    
    },
    {
       id: 2,
       name: "Jj jons",
       job: "Scholar",
       img: "gir.jpg",
        text:
       "the name of the motherfukerr is nsuposee to be a dood man byt banyways we gatther dey sha no nleee every wherre good",
    
    },
    
    

];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item

let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
   showPerson();

});

// show person based on item 

function showPerson(){
    const item  = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

// show next person

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
})
// show prev person

prevBtn.addEventListener("click", function () {
    currentItem--;
   if (currentItem < 0) {
    currentItem  = reviews.length - 1;
   }
    showPerson(currentItem);
});

// show random person
randomBtn.addEventListener('click', function () {
    console.log('hello');
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });