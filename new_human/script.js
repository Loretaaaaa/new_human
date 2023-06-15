class Human {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
        this.speed = 0;
        this.state = undefined;
    }

    run(speed) {
        this.speed = speed;
        alert(`${this.name} is running at speed ${this.speed}`);
    }

    stop() {
        this.speed = 0;
        alert (`${this.name} is stopped`);
    }

    changeState(state) {
        this.state = state;
    }
}

const obj = new Human('John', 'Smith');
console.log(obj);
obj.run(1000);
obj.stop();
obj.changeState('working');
console.log(obj);