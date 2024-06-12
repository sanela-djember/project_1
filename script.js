// book a table click event .hero section

function book(){
    document.getElementById('bookings').scrollIntoView({behavior: 'smooth'});
}


// nav links click event

function navigateToSection(sectionId) {
   document.getElementById(sectionId).scrollIntoView({behavior: 'smooth'})
}



// menu list click 

let list = document.querySelectorAll(".links li");
let boxes = document.querySelectorAll(".box");

list.forEach((el)=> {
  el.addEventListener('click', (e)=> {
    list.forEach((el) => el.classList.remove('active'));
    e.target.classList.add('active');
    boxes.forEach((el2)=>{
       el2.style.display = "none";
    }) 
    document.querySelectorAll(e.target.dataset.filter).forEach((li)=> {
        li.style.display = "flex"
    })
  })
});


// sidebar

function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex';
}

function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none';
}

//gallery 

let slideIndex = 1;
showSlide(slideIndex);


let slideInterval = setInterval(function() {
    moveSlide(1); 
}, 5000); 


document.querySelector(".slides").addEventListener("mouseenter", function() {
    clearInterval(slideInterval); 
});


document.querySelector(".slides").addEventListener("mouseleave", function() {
    slideInterval = setInterval(function() {
        moveSlide(1); 
    }, 5000); 
});

function moveSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;  
    }
    if (n < 1) {
        slideIndex = slides.length; 
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slides[slideIndex - 1].style.display = "flex"; 
}