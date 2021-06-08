//Sidebar Functionality
const mid = document.getElementById("mid");

const openSidebar = () => {
  mid.style.width = "70vw";
};
const closeSidebar = () => {
  mid.style.width = "0vw";
};

const navBar = document.querySelector(".nav");
// Fix NAv
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

new TypeIt("#type1", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("Programmer", { delay: 400 })
  .pause(500)
  .delete(11)
  .type("Developer", { delay: 400 })
  .pause(500)
  .delete(11)
  .type("Hybrid App", { delay: 400 })
  .pause(500)
  .delete(11)
  .go();

new TypeIt("#type2", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("Programmer", { delay: 400 })
  .pause(500)
  .delete(10)
  .type("Developer", { delay: 400 })
  .pause(500)
  .delete(9)
  .type("Hybrid App", { delay: 400 })
  .pause(500)
  .delete(10)
  .go();

gsap.from(".nav-item", {
  opacity: 0,
  duration: 1,
  delay: 0.9,
  y: -30,
  stagger: 0.2,
});

gsap.from(".icons li", {
  opacity: 0,
  duration: 1,
  delay: 2.9,
  y: -30,
  stagger: 0.2,
});

AOS.init();
