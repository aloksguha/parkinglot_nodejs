let expect = require('chai').expect;
let parkingLotFactory = require('../lib/parking_lot_factory');

describe('Park / Un-Park Tests', async function () {
    let parkinglot = await parkingLotFactory.createParkingLot(2);
    it('should park a car', async function () {
        let capapcityBeforePark = parkinglot.getEmptySlots();
        let car = {
            'platNo': 'MH14ET0875',
            'color': 'White'
        };
        let result = await parkinglot.park(car);
        expect(result).not.to.be.undefined;
        expect(parkinglot.getEmptySlots()).to.be.equal(capapcityBeforePark - 1);
    });


    it('should park another car', async function () {
        let capapcityBeforePark = parkinglot.getEmptySlots();
        let car = {
            'platNo': 'MH14EY0875',
            'color': 'White'
        };
        let result = await parkinglot.park(car);
        expect(result).not.to.be.undefined;
        expect(parkinglot.getEmptySlots()).to.be.equal(capapcityBeforePark - 1);
    });

    it('should not be able to park another car', async function () {
        let capapcityBeforePark = parkinglot.getEmptySlots();
        let car = {
            'platNo': 'MH14EY0875',
            'color': 'White'
        };
        let result = await parkinglot.park(car);
        expect(result).not.to.be.undefined;
        expect(parkinglot.getEmptySlots()).to.be.equal(capapcityBeforePark);
    });

    it('should be able to un-park a car', async function () {

        let capapcityBeforeUnPark = parkinglot.getEmptySlots();
        let result = await parkinglot.unpark(1);
        expect(result).not.to.be.undefined;
        expect(parkinglot.getEmptySlots()).to.be.equal(capapcityBeforeUnPark+1);
    });




    it('should be park a car, after unpark', async function () {
        let capacityBeforePark = parkinglot.getEmptySlots();
        let car = {
            'platNo': 'MH14ET0875',
            'color': 'White'
        };
        let result = await parkinglot.park(car);
        expect(result).not.to.be.undefined;
        expect(parkinglot.getEmptySlots()).to.be.equal(capacityBeforePark-1);
    });
    

    it('should not be able to un-park a car twice', async function () {

        let capapcityBeforeUnPark = parkinglot.getEmptySlots();
        let result = await parkinglot.unpark(1);
        expect(result).not.to.be.undefined;
        expect(parkinglot.getEmptySlots()).to.be.equal(capapcityBeforeUnPark+1);
        result = await parkinglot.unpark(1);
        expect(result.startsWith("No Car found at")).to.be.true;

    });


    /*** Leave tests */

    it('should park another car', async function () {
        let capapcityBeforePark = parkinglot.getEmptySlots();
        let car = {
            'platNo': 'MH14EZ0875',
            'color': 'White'
        };
        let result = await parkinglot.park(car);
        expect(result).not.to.be.undefined;
        expect(parkinglot.getEmptySlots()).to.be.equal(capapcityBeforePark - 1);
    });


    it('should not be able to leave a car with hours', async function () {
        let carPlate = 'MH14EZ0875';
        let hours = 2;
        let capapcityBeforeUnPark = parkinglot.getEmptySlots();
        let result = await parkinglot.leave(carPlate, hours);
        console.log(result);
        expect(result).not.to.be.undefined;
        expect(parkinglot.getEmptySlots()).to.be.equal(capapcityBeforeUnPark+1);
        expect(result.startsWith('Registration number '+carPlate+' with Slot Number 1 is free with Charge 10')).to.be.true;
    });



    it('should not be able to un-park a car which never exist', async function () {
        let randomCarPlate = 'MH15RT8765';
        let capapcityBeforeUnPark = parkinglot.getEmptySlots();
        let result = await parkinglot.leave(randomCarPlate, 2);
        expect(result).not.to.be.undefined;
        expect(parkinglot.getEmptySlots()).to.be.equal(capapcityBeforeUnPark);
        expect(result.startsWith('Registration number '+randomCarPlate)).to.be.true;
    });

});

