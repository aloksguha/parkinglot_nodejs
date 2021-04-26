'use strict';

const util = require('./util');
module.exports = {
    createParkingLot : (size) => {
       let parkingLot = {}, ParkedCars=[], maxSize = 0, availableSlot = [];
       try {
            maxSize = parseInt(size);
            if (!isNaN(maxSize) && maxSize >0 ){
                parkingLot.capacity = size;
                for (let i = 1; i <= maxSize; i++) {
                    availableSlot.push(i);
                  }
                console.log(`Created parking lot with ${availableSlot.length} slots`);
            }else{
                return "Supplied slot should be a positive integer";
            }
         } catch (e) {
        return "Supplied slot is not a number!";
       }

  

      parkingLot.getEmptySlots = function(){
         return availableSlot.length;
      }

      parkingLot.park = async function(car){
        if (maxSize === 0) {
            return `parking lot is not initiated`;
          } else if (availableSlot.length == 0) {
            return 'Sorry, parking lot is full'
          } else {
            let slot = availableSlot[0];
            ParkedCars.push({
              'slot': slot,
              'platNo': car.platNo,
              'color':car.color,
              'timestamp': new Date().toISOString()
            });
            availableSlot.shift();
            return `Allocated slot number: ${slot}`;
          }
      }


      parkingLot.unpark = async function(slot){
        slot = parseInt(slot);
        if (maxSize === 0) {
            return "parking lot is not initiated";
        } else if (slot > maxSize){
            return "parking slot not found !!";
        }else if (ParkedCars.length > 0) {
            let parkedCarIndex = ParkedCars.findIndex((ele)=>{return ele && ele.slot == slot;})
            if(parkedCarIndex > -1){ 
                let carDetails = ParkedCars[parkedCarIndex];
                await delete ParkedCars[parkedCarIndex];
                availableSlot.push(slot);
                availableSlot.sort();
                return `Registration number ${carDetails.platNo} with Slot Number ${slot} is free with Charge ${util.calculateParkingFeeBasedOnDateTime(carDetails.timestamp)}`;
                
            }else{
                return `No Car found at ${slot}`;
            }
        }
      }

      parkingLot.leave = async function(platNo, hours){
        if (maxSize === 0) {
            return "parking lot is not initiated";
        } else if (ParkedCars.length > 0) {
          
            let parkedCarIndex = ParkedCars.findIndex((ele)=>{return ele && ele.platNo == platNo;})
            if(parkedCarIndex > -1){ 
                let carDetails = ParkedCars[parkedCarIndex];
                await delete ParkedCars[parkedCarIndex];
                availableSlot.push(carDetails.slot);
                availableSlot.sort();
                return `Registration number ${carDetails.platNo} with Slot Number ${carDetails.slot} is free with Charge ${util.calculateParkingFeeBasedOnHours(hours)}`;
                
            }else{
                return `Registration number ${platNo} not found`;
            }
        }
      }

      parkingLot.status = ()=> {
        if (maxSize === 0) {
          return "parking lot is not initiated";
        } else if (ParkedCars.length > 0) {
          ParkedCars = ParkedCars.sort((car1,car2)=>{ return car1.slot < car2.slot ? -1 : 1 });
          console.log("Slot No.\tRegistration No.");
          for(let i=0;i < ParkedCars.length; i++){
            let parkedCar = ParkedCars[i];
            if(parkedCar){
              console.log(parkedCar.slot + "\t" + parkedCar.platNo);
            }
          }
        } else {
          return `Parking lot is empty !!`;
        }
      }

      return parkingLot;
    } 
}    