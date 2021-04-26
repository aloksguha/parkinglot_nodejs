const readline = require('readline');
const parkingLotFactory = require('./lib/parking_lot_factory')
const fs = require('fs');

async function processLineByLine(fixtureFile) {
    try {
        if (fs.existsSync(fixtureFile)) {
            const rl = readline.createInterface({
                input: fs.createReadStream(fixtureFile),
                crlfDelay: Infinity
            });

            for await (const line of rl) {
                input = line.split(" ");
                switch (input[0].toLowerCase()) {
                    case ('create_parking_lot'):
                        try {
                            pl = parkingLotFactory.createParkingLot(input[1]);
                            if (!pl.capacity) {
                                console.error(pl);
                            }
                        } catch (e) {
                            console.log(`error occured ==> ${e}`);
                        }
                        break;

                    case ('park'):
                        try {
                            const result = await pl.park({ platNo: input[1].trim(), color: input[2] ? input[2].trim() : 'not_entered' });
                            console.log(result);
                        } catch (e) {
                            console.log(`error occured ==> ${e}`);
                        }
                        break;

                    case ('leave'):

                        try {
                            const result = await pl.leave(input[1], input[2]);
                            console.log(result);

                        } catch (e) {
                            console.log(`error occured ==> ${e}`);
                        }
                        break;

                    case ('status'):
                        try {
                            pl.status();
                        } catch (e) {
                            console.log(`error occured ==> ${e}`);
                        }
                        break;

                    case ('exit'):
                        rl.pause();
                        break;

                    default:
                        console.log(`Command not found !!, available command are  
                        1. create_parking_lot <no_of_slot : only positive integer>
                        2. park <Plate_no> <Color_of_Car : Optional> 
                        3. leave <alloted_slot_no> 
                        4. status 
                        \n All commands are case sensitive !!
                        `);
                }
            }
        }
    } catch (err) {
        console.error(err)
    }
}
processLineByLine(process.argv[2]);
