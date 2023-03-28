const  mainContainer = document.querySelector(".main-container");
const buttons = document.querySelectorAll(".btn");
const submitButton = document.getElementById("submit");
const thanksContainer = document.querySelector(".thankyou-container");
const rating = document.getElementById("rating-num");

submitButton.addEventListener('click', () => {
    thanksContainer.classList.remove("hide")
    mainContainer.style.display = "none"

});
// for  each button, when its clicked, it should print its innerhtml
// buttons.forEach((button) =>{
//     button.addEventListener("click", () =>{
//         console.log(button.innerHTML);
//     });
// });

// means that on the button no, that we click on...set it equal to the rating num
buttons.forEach((button) =>{
        button.addEventListener("click", () =>{
           rating.innerHTML = button.innerHTML
        });
     });