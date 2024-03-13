const question = document.querySelector(".question")
const gif = document.querySelector(".gif")
const yesbth = document.querySelector(".yes-btn")
const nobth = document.querySelector(".no-btn")

yesbth.addEventListener("click", () => {
    question.innerHTML = "I love you so muchhhhhhhhhhhhh :)";
    gif.src="https://media.tenor.com/lCKwsD2OW1kAAAAi/happy-cat-happy-happy-cat.gif"
})

nobth.addEventListener("mouseover", () => {
    question.innerHTML="onwayyyyyyyyyyyyyy!!!!!!!!!"
    
    
    
const nobthRect = nobth.getBoundingClientRect();
const maxX = window.innerWidth - nobthRect.width;
const maxY = window.innerHeight - nobthRect.height;

const randomX = Math.floor(Math.random() * maxX)
const randomY =  Math.floor(Math.random() * maxY)

nobth.style.left = randomX + "px";
nobth.style.top = randomY + "px";
})