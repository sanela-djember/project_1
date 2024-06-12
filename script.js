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