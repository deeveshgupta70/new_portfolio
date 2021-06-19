//Sidebar Functionality
const mid = document.getElementById("mid");

const openSidebar = () => {
  mid.style.width = "70vw";
};
const closeSidebar = () => {
  if (screen.width < 769) mid.style.width = "0vw";
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

const Checksize = () => {
  if (screen.width > 769) {
    mid.style.width = "50%";
  }
};

// function sendMail(params) {
//   const data = {
//     from_name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     message: document.getElementById("Message").value,
//   };
//   console.log(data);

//   emailjs
//     .send("service_33nknsw", "template_91xl5vi", data)
//     .then(function (res) {
//       console.log("success", res.status);
//     });
// }
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const serviceID = "service_33nknsw";
    const templateID = "template_91xl5vi";
    // const data = {
    //   from_name: document.getElementById("from_name").value,
    //   email: document.getElementById("email").value,
    //   message: document.getElementById("message").value,
    // };

    emailjs.sendForm(serviceID, templateID, this).then(
      (res) => {
        console.log("success", res.status);
      },
      (err) => {
        console.log(JSON.stringify(err));
      }
    );
    document.getElementById("message").value = "";
    document.getElementById("email").value = "";
    document.getElementById("from_name").value = "";
  });

new TypeIt("#type1", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("Programmer", { delay: 400 })
  .pause(500)
  .delete(11)
  .type("Web Dev", { delay: 400 })
  .pause(500)
  .delete(11)
  .type("Hybrid Dev", { delay: 400 })
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
  .type("Web Dev", { delay: 400 })
  .pause(500)
  .delete(9)
  .type("Hybrid Dev", { delay: 400 })
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
