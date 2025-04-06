class Train {
    constructor(trainNumber, trainName, speed, status) {
        this.trainNumber = trainNumber;
        this.trainName = trainName;
        this.speed = speed;
        this.status = status;
    }

    showTrainInfo() {
        console.log(`Train: ${this.trainName} (${this.trainNumber}) is currently ${this.status} at ${this.speed} km/h.`);
    }

    changeSpeed(newSpeed) {
        this.speed = newSpeed;
        console.log(`Speed updated to ${this.speed} km/h`);
    }
}


let train1 = new Train("12345", "Express", 80, "Running");
let train2 = new Train("67890", "SuperFast", 110, "Delayed");

train1.showTrainInfo();
train1.changeSpeed(90);

train2.showTrainInfo();
train2.changeSpeed(120);


