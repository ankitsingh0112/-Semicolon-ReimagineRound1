// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

// animation effect
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    /*console.log(entry)*/
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    //console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
const hiddenElements1 = document.querySelectorAll(".hidden1");
hiddenElements1.forEach((el) => observer.observe(el));
const hiddenElements2 = document.querySelectorAll(".hidden2");
hiddenElements2.forEach((el) => observer2.observe(el));

// navbar animation
gsap.from(".navbar", {
  y: -50,
  opacity: 0,
  delay: 0.4,
  duration: 0.3
});

// back-cover image animation
gsap.from(".container .phone-cover img", {
  x: 100,
  rotate: 45,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power4.inOut",
  scrollTrigger: {
    trigger: ".container .phone-cover img",
    scroller: "body",
    /*markers:true,*/
    start: "20% 80%",
    end: "50% 50%",
    toggleActions: "play none none reverse",
  },
});

// category title animation
gsap.from(".container .title", {
  y: 100,
  opacity: 0,
  duration: 0.8,
  ease: "power4.inOut",
  scrollTrigger: {
    trigger: ".container .title",
    scroller: "body",
    /*markers:true,*/
    start: "top 90%",
    toggleActions: "play none none reverse",
  },
});

// category image animation
gsap.from(".container .boxes .box a img", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "power4.inOut",
  scrollTrigger: {
    trigger: ".container .boxes .box a img",
    scroller: "body",
    /*markers:true,*/
    start: "10% 90%",
    end: "50% 50%",
    toggleActions: "play none none reverse",
  },
});

// footer animation
gsap.from("footer .row", {
  y:100,
  opacity:0,
  duration:1,
  stagger:0.2,
  ease: "power3.inout",
  scrollTrigger: {
    trigger:".row",
    scroller:"body",
    start:"10% 90%",
    toggleActions:"play none none reverse",
  }
})

// tilt effect on items
VanillaTilt.init(document.querySelectorAll(".item-img"), {
  max: 25,
  speed: 400,
});
