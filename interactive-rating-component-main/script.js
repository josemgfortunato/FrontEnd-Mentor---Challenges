
const numbersEl = document.querySelectorAll(".mainbox__rating-numbers");


numbersEl.forEach(element => {
    element.addEventListener('click', () => { 
    clean()    
    element.classList.add('mainbox__rating-numbers--selected')
    })
})

function clean() {
    numbersEl.forEach(number => {
        number.classList.remove('mainbox__rating-numbers--selected')
    }
)}