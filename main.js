const submit = document.querySelector('button');
const thanks = document.querySelector('#thanks');
const numbers = document.querySelectorAll('.number');
const result = document.querySelector('.result');



submit.addEventListener('click', (event)=>{
    thanks.classList.add('open');
    result.innerHTML = `
        You selected ${ratingResultList[ratingResultList.length-1]} out of 5
    `
})

let ratingResultList = [];
numbers.forEach((num)=>{
    num.addEventListener('click', (event)=>{
        if(num.classList.contains('active')){
            num.classList.toggle('active');
        } else {
            numbers.forEach((num)=>{
                num.classList.remove('active');
            })
            num.classList.toggle('active')
        }

        ratingResultList.push(event.target.dataset.id)
    })
})

