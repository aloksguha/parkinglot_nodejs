const BASE_PRICE = 10;
const CONT_PRICE = 10;

module.exports.calculateParkingFeeBasedOnDateTime = function(parkedDt, checkoutDt) {
    let d1 = new Date(parkedDt);
    let d2 = checkoutDt ? new Date(checkoutDt) : new Date();

    let hours = Math.round((d2-d1)/36e5); 
    let roundedhours = Math.round(hours);  

    if(roundedhours <= 2){
        return BASE_PRICE;
    }else{
        return BASE_PRICE + (CONT_PRICE*(roundedhours-2))
    }
}


module.exports.calculateParkingFeeBasedOnHours = function(hours) {
    let roundedhours = Math.round(hours);  
    if(roundedhours <= 2){
        return BASE_PRICE;
    }else{
        return BASE_PRICE + (CONT_PRICE*(roundedhours-2))
    }
}


