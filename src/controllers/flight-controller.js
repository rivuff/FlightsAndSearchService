const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create = async (req,res)=>{
    try {
        const flight = await flightService.createFLight(req.body);

        return res.status(201).json({
            data: flight,
            success: true,
            err: {},
            message: "successfully created a flight"
        })
        
    } catch (error) {
        console.log(error);

        return res.status(501).json({
            data: {},
            success: false,
            message: "not able to create a flight",
            err: error
        })
    }
}

module.exports={
    create
}