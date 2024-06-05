

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