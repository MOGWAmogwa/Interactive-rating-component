// rating number를 클릭하면 css 에서는 색깔이 오렌지 색으로 바뀌게 만들고, 선택된 값을 저장하는데, 마지막으로 클릭된 값을 제출하기를 눌렀을 때 선택되도록 만들기 

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
    thanks.classList.add('open')
    result.innerHTML = `
        <div class="result">
            You selected ${num[num.length-1]} out of 5
        </div>
    `
})





