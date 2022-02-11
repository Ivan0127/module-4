const carSpeed = 70
const carColor = "bright red, purple, black, grey"

if(carSpeed === 75){
    console.log("Good job, driver");
    
}


else if(carSpeed > 75) {
    console.log("Slow down!");

}
else if(carSpeed < 75) {

console.log("Speed up, there's people behind you!");

}


switch(carSpeed){
    case 75:
        console.log("Driver is going the speed limit");
        break;
    case 70:
        console.log("Driver is going exactly 5 mph below the speed limit");
        break;
    default:
        console.log("How fast is the driver going?");
}

console.log(`That ${carColor.slice(12,18)} car is going down the highway at a speed of ${carSpeed} miles per hour.`)

console.log = 
  carSpeed.valueOf();

