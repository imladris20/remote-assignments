/* -------------------------------------
     Request 1
--------------------------------------*/

const welcomeBlock = document.querySelector('.message');
const welcomeMessage = document.querySelector('.welcome-message');

welcomeBlock.addEventListener('click', () => {
    welcomeMessage.textContent = "一起面對這座島嶼的創傷";
});


/* -------------------------------------
     Request 2
--------------------------------------*/

const origin = [
    document.querySelector('.main-logo'),
    document.querySelector('.menu'),
];

const float = [
    document.querySelector('.close-logo'),
    document.querySelector('.close'),
    document.querySelector('.main-nav-float-ul'),
];

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
});


/* -------------------------------------
     Request 3
--------------------------------------*/

const btnMoreContent = document.querySelector('.more-content');
const btnClickHide = document.querySelector('.click-hide-a');
const allContent = document.querySelectorAll('.content');
const hide = document.querySelectorAll('.hide');
const hideContent = document.querySelectorAll('.hide-content')
const btnContent = document.querySelectorAll('.content .button');
let isClicked = false;

btnMoreContent.addEventListener('click', () => {
    if (!isClicked) {
        for (let node of allContent) {
            node.style.display = 'flex';
            node.style.flex = '1';
            node.style.flexDirection = 'column';
            node.style.flexBasis = '40%';
            node.style.justifyContent = 'space-between';
            node.style.alignItems = 'center';
        }
    
        for (let node of hideContent) {
            node.style.display = 'block';
        }
    
        for (let node of btnContent) {
            node.style.marginTop = 'auto';
            node.style.alignSelf = 'flex-end';
        }
    
        btnClickHide.innerHTML = `收起議題 <img class="arrow" alt="up arrow" src="img/up-arrow.png">`;
        isClicked = true;
    } else {
        for (let node of hide){
            node.style.display = 'none';
        }

        btnClickHide.innerHTML = `看更多議題 <img class="arrow" alt="arrow" src="img/right-arrow.png">`;
        isClicked = false;
    }
    
})