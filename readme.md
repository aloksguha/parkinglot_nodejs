# Parking Lot Command Line Utility
This parking lot command line utility accepts a file as an argument and processes the contents of the file 
(basically on a line by line basis). Each line is basically a command to be executed with certain parameters.
Right now there are four commands which could be accepted.

1. **create_parking_lot** {no_of_slots}    
    This command creates a parking lot with the capacity of slots provided as a parameter. It accepts only positive integer as the parameter
2. **park** {reg_number}
    This command parks a vehicle in any of the nearest slot available from the entrance.
3. **leave** {reg_number} {hours}
    This command vacates a vehicle from parking lot and computes the parking fee for number of hours provided.
4. **status**
   This command doesn't needs any parameter and prints the status of the parked vehicles.

## How to run the application through command line(s)

You can run the application through command line from `parking_lot_2.0.0` by doing
```
parking_lot $ npm start
```
## How to run the test(s)

You can run the full suite from `parking_lot_2.0.0` by doing
```
parking_lot $ npm test 
Created parking lot with 2 slots
    ✓ should park a car
    ✓ should park another car
    ✓ should not be able to park another car
    ✓ should be able to un-park a car
    ✓ should be park a car, after unpark
    ✓ should not be able to un-park a car twice
    ✓ should park another car
Registration number MH14EZ0875 with Slot Number 1 is free with Charge 10
    ✓ should not be able to leave a car with hours
     ✓ should not be able to un-park a car which never exist
Create Parking Lot Test
    ✓ should not create a new parking lot with no argument passed
    ✓ should not create a new parking lot with 0 parking slot.
    ✓ should not create a new parking lot with any non-integer parking slot.
Created parking lot with 10 slots
    ✓ should create a new parking lot with 10 parking slots.
Util Tests
    ✓ should return parking fee as 10 if time is less than 2 hours
    ✓ should return parking fee as 20 if time is more than 2 hours and less than 3 hours
    ✓ should return parking fee as 60 if time is more than 5 hours and less than 6 hours
    ✓ should return 10 if supplied hours are less than 2 hours
    ✓ should return (hours*10 -10) if supplied hours are more than 2 hours
    
  18 passing (9ms)

```
## How to run the application
You can run the application using `bin/parking_lot` by doing
```
parking_lot$ ./bin/parking_lot functional_spec/fixtures/file_input.txt
```

## Author
* Alok Guha (aloksguha@gmail.com)