//type of vehicle

class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model= model;
        this.year = year;
    }
    honk() {
        return "Beep!";
    }
    toString (){
        return 'The vehicle is a ${this.make} ${this.model} ${this.year}.';
    }
}

//cars are a type of vehicle with 4 wheels

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4
    }
}

//cars are a type of vehicle with 2 wheels

class Motorcycle extends Vehicle {
    constructor (make, model, year) {
        super(make, model, year)
        this.numWheels = 2;
    }

revEngine() {
    return "Vroom!"
}
}

//Garage

class Garage {
    constructor (Capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add (newVehicle) {
        if(!(newVehicle instanceof Vehicle)) {
            return "Only Vehicle Are Allowed in Here!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle Added!";
    }
}