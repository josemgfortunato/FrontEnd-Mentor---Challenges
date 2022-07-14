//Elements selected from HTML page

const numbersEl = document.querySelectorAll(".mainbox__rating-numbers")
const mainlEl = document.querySelector("#main")
const submitEl = document.querySelector("#submit")

//Function to change CSS Class of rating options

numbersEl.forEach(element => {
    element.addEventListener('click', () => { 
    clean()    
    element.classList.add('mainbox__rating-numbers--selected')
    ratingResult(element.innerText)
    })
})

//Function to restore CSS Class of rating options to Default

function clean() {
    numbersEl.forEach(number => {
        number.classList.remove('mainbox__rating-numbers--selected')
    }
)}

//Function to add new contents to Main Session on button click

function ratingResult(number) {
    submitEl.addEventListener('click', () => {
        mainlEl.innerHTML = ""
        mainlEl.innerHTML = `
        <div class="mainbox__illustration">
        <img src="./images/illustration-thank-you.svg" alt="Illustration Thank You">
        </div>
        <div class="mainbox__youselected">
        <span class="mainbox__youselected-text">
          You selected ${number} out of 5
        </span>
        </div>
        <div class="mainbox__text">
            <h1>Thank You!</h1>
            <p> We appreciate you taking the time to give a rating
                if you ever need more support, don't hesitate to get in touch!
            </p>
        </div>
        `
    })
}
