"use strict"

const arrow = document.querySelectorAll(".questions__icon");
const questions = document.querySelectorAll(".faq__question");
//const answers = document.querySelectorAll(".faq__text");

arrow.forEach(item => {
    item.addEventListener("click", e =>{
        e.target.nextElementSibling.classList.toggle("hidden");
        e.target.previousElementSibling.classList.toggle("selected");
        e.target.classList.toggle("rotated")
    });
});

questions.forEach(item =>{
    item.addEventListener("click", e =>{
        e.target.nextElementSibling.nextElementSibling.classList.toggle("hidden");
        e.target.classList.toggle("selected");
        e.target.nextElementSibling.classList.toggle("rotated");
    });
});