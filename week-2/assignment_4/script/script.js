// Request 1

const welcomeBlock = document.querySelector('.message');
const welcomeMessage = document.querySelector('.welcome-message');

welcomeBlock.addEventListener('click', ()=> {
    welcomeMessage.textContent = "一起面對這座島嶼的創傷";
})

// Request 2
const origin = [
    document.querySelector('.main-logo'),
    document.querySelector('.menu'),
]

const float = [
    document.querySelector('.close-logo'),
    document.querySelector('.close'),
    document.querySelector('.main-nav-float-ul'),
]

for (let item of document.querySelectorAll('.main-nav-float-ul a')) {
    float.push(item);
}

origin[0].addEventListener('click', () => {

    for (let node of origin) {
        node.style.display = 'none';
    }

    for (let node of float) {
        node.style.display = 'block';
    }

});

float[0].addEventListener('click', () => {

    for (let node of origin) {
        node.style.display = '';
    }

    for (let node of float) {
        node.style.display = 'none';
    }

})

// Request 3