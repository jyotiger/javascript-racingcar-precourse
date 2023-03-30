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

function createCar(carNameList){

}