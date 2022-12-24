const {ClientErrorCodes} = require('../utils/error-codes')

const validateCreateFlight = (req,res,next)=>{
    if(
        !req.body.flightNumber ||
        !req.body.flightNumber||
        !req.body.airplaneId||
        !req.body.departueAirportID||
        !req.body.arrivalAirportId||
        !req.body.arrivalTime||
        !req.body.departureTime||
        !req.body.price
    ){
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data:{},
            success: false,
            message: "Invalid request body for create flight",
            err: "missing msndatory attributes to create flights"
        });
    }

    next();
}

module.exports ={
    validateCreateFlight
}