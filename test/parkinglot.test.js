const expect = require('chai').expect;
const parkingLotFactory = require('../lib/parking_lot_factory');

describe('Create Parking Lot Test', async function () {

      it('should not create a new parking lot with no argument passed', async function () {

        let parkingLot = await parkingLotFactory.createParkingLot();
        expect(parkingLot).not.to.be.undefined;
        expect(parkingLot.startsWith("Supplied slot should be a positive integer")).to.be.true;

        expect(parkingLot.capacity).to.be.undefined;
        expect(parkingLot.park).to.be.undefined;
        expect(parkingLot.unpark).to.be.undefined;
        expect(parkingLot.status).to.be.undefined;
        expect(parkingLot.getEmptySlots).to.be.undefined;
    });

      it('should not create a new parking lot with 0 parking slot.', async function () {
        let parkingCapacity = 0;
        let parkingLot = await parkingLotFactory.createParkingLot(parkingCapacity);
        expect(parkingLot).not.to.be.undefined;
        expect(parkingLot.startsWith("Supplied slot should be a positive integer")).to.be.true;

        expect(parkingLot.capacity).to.be.undefined;
        expect(parkingLot.park).to.be.undefined;
        expect(parkingLot.unpark).to.be.undefined;
        expect(parkingLot.status).to.be.undefined;
        expect(parkingLot.getEmptySlots).to.be.undefined;
    });


    it('should not create a new parking lot with any non-integer parking slot.', async function () {
      let parkingLot = await parkingLotFactory.createParkingLot('string');
      expect(parkingLot).not.to.be.undefined;
      expect(parkingLot.startsWith("Supplied slot should be a positive integer")).to.be.true;

      expect(parkingLot.capacity).to.be.undefined;
      expect(parkingLot.park).to.be.undefined;
      expect(parkingLot.unpark).to.be.undefined;
      expect(parkingLot.status).to.be.undefined;
      expect(parkingLot.getEmptySlots).to.be.undefined;
  });

    it('should create a new parking lot with 10 parking slots.', async function () {
        let parkingCapacity = 10;
        let parkingLot = await parkingLotFactory.createParkingLot(10);
        expect(parkingLot).not.to.be.undefined;
        expect(parkingLot.capacity).not.to.be.undefined;
        expect(parkingLot.capacity).to.be.equal(parkingCapacity);
        expect(parkingLot.park).not.to.be.undefined;
        expect(parkingLot.unpark).not.to.be.undefined;
        expect(parkingLot.status).not.to.be.undefined;
        expect(parkingLot.getEmptySlots).not.to.be.undefined;
        expect(parkingLot.getEmptySlots()).to.be.equal(parkingCapacity);
    });
});
  
