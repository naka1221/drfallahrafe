

 window.addEventListener('scroll',  function(){
    const scrollTopfix = document.documentElement.scrollTop
    if(window.innerWidth > 991){
        console.log("jjkjzkjk")
        if(scrollTopfix>180) {
            document.querySelector('.down-nav').classList.add('fixed');
            console.log("jjkjzkjk")

        }
        else{
            document.querySelector('.down-nav').classList.remove('fixed');
  
        }
    }
  })


  ////////////////////////


  const linebar=document.querySelector(".line-nav")
const sidemenu = document.querySelector(".nav-side")
const linenav = document.querySelector(".line-min_nav")
const overlay =document.querySelector(".overlay")

linebar.addEventListener("click" , function(){
  sidemenu.classList.toggle("hide")
  linenav.classList.toggle("closeBtn")
  overlay.classList.toggle("active")

})
///////////////////////////////////////////////////////////////////////

//   let swipertow = new Swiper(".mySwiper", {
//     direction: 'vertical',
//   pagination: {
//     el: ".swiper-pagination",
//     type: "progressbar",
//   },
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// var swiper3 = new Swiper(".mySwiper3", {
//     direction: 'vertical',
//   pagination: {
//     el: ".swiper-pagination",
//     type: "progressbar",
//   },
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
    
//   },

// });



$('.owl-carousel').owlCarousel({
    loop:true, 
    
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})




  var swiperl = new Swiper('.swiperl', {
        
    slidesPerView: 5,
    spaceBetween: -50,
  direction: "vertical",
  //   freeMode: true,

    pagination: {
      el: '.circle',
      clickable: true,
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },    breakpoints: {
 // when window width is >= 320px
//  400:{
//      slidesPerView: 8,
//      spaceBetween: 0
//    },
//    769:{
//      slidesPerView: 10,
//      spaceBetween: 0
//    },
 
},
    
  });



//   const dark = document.querySelector(".dark-mode")
// const logoRight= document.querySelector(".top-nav_right-logo")
// const  light= document.querySelector(".light-mode")
// var rootbee = document.querySelector(':root');


// // //// dark moode Handel
// let flags = 1;
// logoRight.addEventListener("click", function(){
//     dark.classList.toggle("show")
//     light.classList.toggle("show")
//     if(flags == 1){
//         rootbee.style.setProperty('--bs-light',"#333");
//         rootbee.style.setProperty('--white-color',"#666");
//         rootbee.style.setProperty('--second-color',"#999")
//         flags =0;
//     }
//      else if(flags == 0){
//         rootbee.style.setProperty('--bs-light',"#FFF");
//         rootbee.style.setProperty('--white-color',"#fff");
//         rootbee.style.setProperty('--second-color',"#d3c137ef")

//         flags=1;
//      }

//})


// ///////   show active pages in  navbar-item
// const link =document.querySelectorAll(".main-nav_listItem")
// console.log(link.item)
// link.forEach(elem => {
// elem.addEventListener("click" , function() {

//     link.forEach(se => {
//       se.classList.remove("active")
//     })
//      elem.classList.add("active")
//   })
// })

// //////    hamberger menu fore nav-side



// //////  inpute fore mobile size

const minSearch = document.querySelector(".min-search")
const inputsearch =document.querySelector(".min-nav_input")

minSearch.addEventListener("click" , function(){
  inputsearch.classList.toggle('hide-inputt')
  console.log("mmmmm")
 })



//  /////// fixed navbar when scroll
//  window.addEventListener('scroll',  function(){
//   const scrollTopfix = document.documentElement.scrollTop
//   if(window.innerWidth > 991){
//       if(scrollTopfix>180) {
//           document.querySelector('.down-nav').classList.add('fixed');
//       }
//       else{
//           document.querySelector('.down-nav').classList.remove('fixed');

//       }
//   }
// })


// ////// slider for main (index.html) page
// const swiperSliderr= new Swiper('.swiper' , {
//   loop: true,

//   navigation : {
//     nextEl: 'swiper-button-next',
//     prevEl: 'swiper-button-prev',
//   },

//   pagination:{
//     el:'.swiper-pagination'
//   },
//   autoplay: {
//     delay: 6500,
//     disableOnInteraction: false,
//   },
// })


