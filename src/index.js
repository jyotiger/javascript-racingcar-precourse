import { Car } from "./car.js";
const carInput = document.getElementById('car-names-input');
const carSubmitBtn = document.getElementById('car-names-submit');
carSubmitBtn.addEventListener('click',carValidCheck);

function carValidCheck(e){
    e.preventDefault();
    let carNameList = carInput.value.split(',');
    if(carNameList.findIndex(name=>name.trim().length===0 || name.length >5) !== -1){
        alert("자동차 이름은 5자이하로 콤마로 구분해서 입력해주세요.");
        return;
    }

    createCar(carNameList);
}

let carList = [];
function createCar(carNameList){
    carList = [];
    carNameList.forEach(name=>{
        const car = new Car(name);
        carList.push(car);
    })
}

const countInput = document.getElementById('racing-count-input');
const countSubmitBtn = document.getElementById('racing-count-submit');
countSubmitBtn.addEventListener('click',countValidCheck);

function countValidCheck(e){
    e.preventDefault();
    if(countInput.value < 1){
        alert("시도할 횟수를 입력해주세요.");
        return;
    }
    if(carList.length === 0){
        alert('경주할 자동차 이름을 입력해주세요.');
        return;
    }
}