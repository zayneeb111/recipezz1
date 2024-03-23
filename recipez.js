function menu(){
    x=document.getElementById("btn1").checked;
    y=document.getElementById("sidebar2");
    b=document.getElementById("bars");
    t=document.getElementById("times2");

    b3=document.getElementById("btn3").checked;
    
    if (x=true){
        t.style.display='inline'
        y.style.left='0px'
        b.style.display='none'
   

}}

function leave(){

    y=document.getElementById("sidebar2");
    b=document.getElementById("bars");
    y.style.left='-280px'
    b.style.display='inline'

}
const initslider=()=>{
    const imglist=document.querySelector(".slider .imglist")
    const slidebtns=document.querySelectorAll(".slider .slide-button")
    
    slidebtns.forEach(button => {
        button.addEventListener("click",()=>{
            const direction=button.id==="slidebtn1" ? -1 : 1;
            const scrollAmount= imglist.clientWidth * direction
            imglist.scrollBy({left: scrollAmount , behavior:"smooth"})
        })
    })

}  
window.addEventListener("load",initslider)



function showlog(){
    f=document.getElementById('form')
    f.style.display='block'
}

function leave2(){

    y=document.getElementById("form");
    
    y.style.display='none'
   

}