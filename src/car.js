export class Car{
    constructor(name){
        this.name = name;
        this.forward = 0;
    }
    getCarName(){
        return this.name;
    }
    moveForward(){
        this.forward += 1;
    }
}