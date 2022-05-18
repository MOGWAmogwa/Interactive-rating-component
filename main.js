
const number = document.querySelector('.rating');
const submitBtn = document.querySelector('.submit');
const request = document.querySelector('#request');
const thanks = document.querySelector('#thanks');
const result = document.querySelector('.result');


function colorChange(value){
    value.classList.add('colorChange')
}


let num = [];
let storage = [];
number.addEventListener('click', (event)=>{

    const target = event.target;
    const ratingNum = target.dataset.id;
    num.push(ratingNum);
    storage.push(target)
    colorChange(target);
    if (num.length>1 && ratingNum!=num[num.length-2] ){
        storage[storage.length-2].classList.remove('colorChange')
    }
})

submitBtn.addEventListener('click', (event)=>{
    if(num.length===0){
        return;
    }
    thanks.classList.add('open')
    result.innerHTML = `
        <div class="result">
            You selected ${num[num.length-1]} out of 5
        </div>
    `
})





