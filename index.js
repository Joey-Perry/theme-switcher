let count = 0;

const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');
const resetBtn = document.getElementById('reset-btn');

let countDisplay = document.getElementById('counter');

function incrementCount(){
    count++;
    countDisplay.innerText = count;
}

function decrementCount(){
    count--;
    countDisplay.innerText = count;
}

function resetCount(){
    count = 0;
    countDisplay.innerHTML = `<mark> ${count} </mark>`;
}

function switchTheme(theme){
    document.querySelector('body').className = theme;
    document.querySelector('main').className = theme;
    document.querySelectorAll('button').forEach(item => {
        item.className = theme });
    }

increaseBtn.addEventListener('click', incrementCount);
decreaseBtn.addEventListener('click', decrementCount);
resetBtn.addEventListener('click', resetCount);
