function myFunction() {
    let name = prompt("What is your name?");
    let gender = prompt("What is your gender?");
    let age = prompt("What is your age?");
    let year = prompt("What year is it?");
    if(age >= 18)
    {
        alert(`Hello ✨${name}✨! It's nice to see you :)! You've been reincarnated 💫 as a ${gender} in the year of ${year} 🌌.`);
    }
    else
    {
        alert(`You're too young. Come back once you're 18 years old :)`);
    }
    alert(`Enjoy growing out of your shell 🥚 ${name} and don't forget to have fun :) ✨!`);
}

const button = document.querySelector("button");

button.addEventListener("click", myFunction);