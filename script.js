console.log('START');

const dataBase = [
    {
        city: 'Rostov-on-Don<br>LCD admiral',
        apartmentArea: '81 m2',
        repairTime: '3.5 months',
        repairCost: 'Upon request',
        image: "./image/image1.png",
    },
    {
        city: 'Sochi<br>Thieves',
        apartmentArea: '105 m2',
        repairTime: '4 months',
        repairCost: 'Upon request',
        image: "./image/image2.png",
    },
    {
        city: 'Rostov-on-Don<br>Patriotic',
        apartmentArea: '93 m2',
        repairTime: '3 months',
        repairCost: 'Upon request',
        image: "./image/image3.png",
    },
]

const city = document.querySelector('.city');
const apartmentArea = document.querySelector('.apartmentArea');
const repairTime = document.querySelector('.repairTime');
const repairCost = document.querySelector('.repairCost');
const image = document.querySelector('.image');

const box2 = document.querySelector('.box_2');
const box3 = document.querySelector('.box_3');
const box4 = document.querySelector('.box_4');
const box_img = document.querySelector('.box-img');



const setEntety = (index) => {
    city.innerHTML = dataBase[index].city;
    apartmentArea.innerText = dataBase[index].apartmentArea;
    repairTime.innerText = dataBase[index].repairTime;
    repairCost.innerText = dataBase[index].repairCost;
    image.style.backgroundImage = `url(${dataBase[index].image})`;
    
    if(currentIndex == 0) {
        box2.innerHTML = '<div class="box-init box_2 select">Rostov-on-Don, Admiral</div>';
        box3.innerHTML = 'Sochi Thieves';
        box4.innerHTML = 'Rostov-on-Don Patriotic';
        box_img.innerHTML = '<img src="./image/Group1.svg" alt="group">';
    }
    if(currentIndex == 1) {
        box2.innerHTML = 'Rostov-on-Don, Admiral';
        box3.innerHTML = '<div class="select">Sochi Thieves</div>';
        box4.innerHTML = 'Rostov-on-Don Patriotic';
        box_img.innerHTML = '<img src="./image/Group2.svg" alt="group">';
    }
    if(currentIndex == 2) {
        box2.innerHTML = 'Rostov-on-Don, Admiral';
        box3.innerHTML = 'Sochi Thieves';
        box4.innerHTML = '<div class="select">Rostov-on-Don Patriotic</div>';
        box_img.innerHTML = '<img src="./image/Group3.svg" alt="group">';
    }
    console.log(currentIndex);
}

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentIndex = 0;

prev.addEventListener('click', () => {
    currentIndex -= 1;
    if(currentIndex < 0) {
        currentIndex = 2;
    }
    setEntety(currentIndex);
    console.log('Click');
});

next.addEventListener('click', () => {
    currentIndex += 1;
    if(currentIndex > 2) {
        currentIndex = 0;
    }
    setEntety(currentIndex);
    console.log('Click');
});

box2.addEventListener('click', () => {
    currentIndex = 0;
    setEntety(currentIndex);
});

box3.addEventListener('click', () => {
    currentIndex = 1;
    setEntety(currentIndex);
});

box4.addEventListener('click', () => {
    currentIndex = 2;
    setEntety(currentIndex);
});