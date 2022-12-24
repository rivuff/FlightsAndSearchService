const {FlightService} = require('../services/index');
const {ClientErrorCodes} = require('../utils/error-codes')
const {SuccessCodes} = require('../utils/error-codes')
const {ServerErrorCodes} = require('../utils/error-codes')
const flightService = new FlightService();

const create = async (req,res)=>{
    try {
        const flight = await flightService.createFLight(req.body);

        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success: true,
            err: {},
            message: "successfully created a flight"
        })
        
    } catch (error) {
        console.log(error);

        return res.status(ServerErrorCodes.NOT_IMPLEMENTED).json({
            data: {},
            success: false,
            message: "not able to create a flight",
            err: error
        })
    }
}

const getAll = async (req,res)=>{
    try {
        const response = await flightService.getAllFlightData(req.query);

        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: "successfully fetched all flights"
        })
    } catch (error) {
        console.log(error);

        return res.status(ServerErrorCodes.NOT_IMPLEMENTED).json({
            data: {},
            success: false,
            message: "not able to get all flights",
            err: error
        })
    }
}

module.exports={
    create,
    getAll
}