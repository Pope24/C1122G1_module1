
class ElectricLamp{
    constructor(status) {
        this.status = status;
    }
    getStatus(){
        return this.status;
    }
}

class SwitchButton{
    constructor(lamp, status) {
        this.status = status;
        this.lamp = lamp;
    }
    getLamp(){
        return this.lamp;
    }

    setLamp(lamp){
        this.lamp = lamp;
    }

    connectToLamp(Electriclamp){
        return this.lamp = Electriclamp;
    }

    switchOff(){
        this.lamp.status = false;
        return this.status = false;
    }

    switchOn(){
        this.lamp.status = true;
        return this.status = true;
    }
}


let electricLamp_1 = new ElectricLamp(false);

let switchButton_1 = new SwitchButton(electricLamp_1,false); // kết nối giữa  công tắc 1 và đèn 1

function turnOnLamp() {
    switchButton_1.switchOn();
    if (electricLamp_1.getStatus() == true) {
        alert("Turning on LAMP");
    }
}
function turnOffLamp() {
    switchButton_1.switchOff();
    if (electricLamp_1.getStatus() == false) {
        alert("Turned off LAMP");
    }
}