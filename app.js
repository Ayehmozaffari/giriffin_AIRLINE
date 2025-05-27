// core version + navigation, pagination modules:

const menuBtn=document.getElementById("menu-btn");
const navLinks=document.getElementById("nav-links");
const menuBtnIcon=menuBtn.querySelector("div");
menuBtn.addEventListener("click", (e)=>{
    navLinks.classList.toggle("open");
    const isOpen= navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ?'icons8-close':'icons8-menu')
});
navLinks.addEventListener("click" ,(e)=>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","icons8-close")
});
// const scrollRevealOption ={
//     origin:"bottom",
//     distance:"50px",
//     duration:1000,

// }
// scrollReveal().reveal(".header__image img" ,{
//     ...scrollRevealOption,
//     origin:"right",
// });
let items=document.querySelectorAll('.header__image')
const observer=new IntersectionObserver(entrise=>{
    entrise.forEach(e => {
        e.target.classList
        .toggle("show",e.isIntersecting)
    })
})
items.forEach(header__image=> {
    observer.observe(header__image)
})
// const swiper = document.querySelector('.swiper').swiper;

// // Now you can use all slider methods like
// swiper.slideNext();
// const swiper = new Swiper('.swiper', {
//     speed: 400,
//     spaceBetween: 100,
//   });
  // swiper element
  let slideIndex = 0;
  showSlides();
  
  // function showSlides() {
  //   let i;
  //   let slides = document.getElementsByClassName("swiper");
  //   let dots = document.getElementsByClassName("client_card");
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";  
  //   }
  //   slideIndex++;
  //   if (slideIndex > slides.length) {slideIndex = 1}    
  //   for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  //   slides[slideIndex-1].style.display = "block";  
  //   dots[slideIndex-1].className += " active";
  //   setTimeout(showSlides, 2000); // Change image every 2 seconds
  // const swiper = new Swiper('.swiper', {
  //   // Optional parameters
  //   direction: 'vertical',
  //   loop: true,
  
  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  
  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  // });