let expect = require('chai').expect;
let util = require('../lib/util');

describe('Util Tests', async function () {
    it('should return parking fee as 10 if time is less than 2 hours', async function () {
        let carParkDateTime = new Date('2021-04-24T16:16:27.986Z');
        let carCheckoutDateTime = new Date('2021-04-24T17:16:27.986Z'); 
        let charges = util.calculateParkingFeeBasedOnDateTime(carParkDateTime, carCheckoutDateTime);
        expect(charges).to.be.equal(10);

    });

    it('should return parking fee as 20 if time is more than 2 hours and less than 3 hours', async function () {
        let carParkDateTime = new Date('2021-04-24T16:16:27.986Z');
        let carCheckoutDateTime = new Date('2021-04-24T18:58:27.986Z'); 
        let charges = util.calculateParkingFeeBasedOnDateTime(carParkDateTime, carCheckoutDateTime);
        expect(charges).to.be.equal(20);
    });

    it('should return parking fee as 60 if time is more than 5 hours and less than 6 hours', async function () {
        let carParkDateTime = new Date('2021-04-24T06:16:27.986Z');
        let carCheckoutDateTime = new Date('2021-04-24T12:58:27.986Z'); 
        let charges = util.calculateParkingFeeBasedOnDateTime(carParkDateTime, carCheckoutDateTime);
        expect(charges).to.be.equal(60);
    });

    it('should return 10 if supplied hours are less than 2 hours', async function () {
        expect(util.calculateParkingFeeBasedOnHours(2)).to.be.equal(10);
        expect(util.calculateParkingFeeBasedOnHours(1.2)).to.be.equal(10);
    });

    it('should return (hours*10 -10) if supplied hours are more than 2 hours', async function () {
        expect(util.calculateParkingFeeBasedOnHours(5)).to.be.equal(40);
        expect(util.calculateParkingFeeBasedOnHours(6)).to.be.equal(50);
    });
});    