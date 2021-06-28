const showMenu=(toggleId,navId)=>{
    const toggle=document.getElementById(toggleId)
    const nav=document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener("click",()=>{
            nav.classList.toggle("show")
        })
    }
}
showMenu('nav-toggle','nav-menu')

//======for active deactiving class=============
const navLinks=document.querySelectorAll(".nav-link")
navLinks.forEach((itm)=>{
    itm.addEventListener("click", ()=>{
        removeActiveClasses();
        itm.classList.add("active")
        document.getElementById("nav-menu").classList.add("show")
    })
})

function removeActiveClasses()
{
    navLinks.forEach((itm)=>{
        itm.classList.remove("active")
    })
}





// ==============full view image========

const images=document.querySelectorAll(".img")
images.forEach(image =>{
    image.addEventListener("click", ()=>{
        image.classList.toggle("full-screen")
    })
})
function removeActiveImage(){
    images.forEach((image) =>{
        image.classList.remove("full-screen")
    })
}

//===========booking
var noOfPasses= document.getElementById("total-pass")
noOfPasses.addEventListener("change", getAmount)
function getAmount(){
    document.getElementById("print-amount").innerText='-\$'+noOfPasses.value*100
}

// document.getElementById("print-amount").innerText='- \$ ${noOfPasses}'