const oneEl = document.querySelector("#one");
const twoEl = document.querySelector("#two");
const threeEl = document.querySelector("#three");
const fourEl = document.querySelector("#four");
const fiveEl = document.querySelector("#five");

const elements = [oneEl, twoEl, threeEl, fourEl, fiveEl];

elements.forEach(element => {
    element.addEventListener('click', () => {    
        if (element.className = 'mainbox__rating-numbers') {
            element.classList.add('mainbox__rating-numbers--selected');
        } else {
            if (element.className = 'mainbox__rating-numbers--selected') {  
                element.classList.add('mainbox__rating-numbers');  
            }
        }
    }
);
    
});

