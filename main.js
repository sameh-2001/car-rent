let MenuBtn = document.querySelector("#MenuBtn");
let Navbar = document.querySelector(".navbar");

MenuBtn.onclick = () => {
  MenuBtn.classList.toggle("fa-times");
  Navbar.classList.toggle("active");
};

window.onscroll = () => {
  MenuBtn.classList.remove("fa-times");
  Navbar.classList.remove("active");
  ThemeToggle.classList.remove("active");
};

// Login Form
document.querySelector("#LoginBtn").onclick = () => {
  document.querySelector(".loginFormContainer").classList.toggle("active");
};
document.querySelector("#CloseLoginForm").onclick = () => {
  document.querySelector(".loginFormContainer").classList.remove("active");
};

// Home Parallex

document.querySelector(".home").onmousemove = (e) => {
  document.querySelectorAll(".homeParallexEffect").forEach((el) => {
    let Speed = el.getAttribute("data-speed");
    let X = (window.innerWidth - e.pageX * Speed) / 60;
    let Y = (window.innerHeight - e.pageY * Speed) / 60;

    el.style.transform = `translateX(${Y}px) translateY(${X}px)`;
  });
};

document.querySelector(".home").onmouseleave = (e) => {
  document.querySelectorAll(".homeParallexEffect").forEach((el) => {
    el.style.transform = `translateX(0px) translateY(0px)`;
  });
};







// Theme Toggle
let ThemeToggle = document.querySelector(".themeToggle");
let ToggleBtn = document.querySelector(".ToggleBtn");

ToggleBtn.onclick = () => {
  ThemeToggle.classList.toggle("active");
  Menu.classList.remove("fa-times");
  Navbar.classList.remove("active");
};
document.querySelectorAll(".themeToggle .themeBtn").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--main", color);
  };
});

// Code to handle renting a car


function rent(){
  
  window.alert(`You have rented this car. Enjoy your ride!`);
}