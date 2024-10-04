let box = document.querySelector("div");
let input = document.querySelector("input");

input.addEventListener("input",()=>{
    box.style.background = input.value;
    box.style.borderRadius = input.value;
});
 let mybox = document.getElementById("mybox")
 let mybutton = document.getElementById("mybutton")

mybutton.addEventListener("mouseover",(Event) =>{
    mybox.style.backgroundColor="red";
    mybox.textContent ="Yallappa";
    mybox.style.borderRadius="10%"
});


mybutton.addEventListener("click", (Event)=> {
    mybox.style.backgroundColor="orange";
    mybox.textContent ="Amar";
    mybox.style.color='blue'
})

mybutton.addEventListener("mouseout", (Event)=> {
    mybox.style.backgroundColor="pink";
    mybox.textContent ="Rahul";
    mybox.style.color='black'
})

