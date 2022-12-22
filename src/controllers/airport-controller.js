const {AirportService}= require('../services/index')

const airportService = new AirportService();

const create = async (req,res)=>{
    try {
        const airport = await airportService.createAirport(req.body);

        return res.status(201).json({
            data: airport,
            success: true,
            message: 'successsully created airport',
            err: {}
        })
    } catch (error) {
        console.log(error);

        return res.status(501).json({
            data: {},
            success: false,
            message: "not able to create a airport",
            err: error
        })
    }
}


const destroy = async (req,res)=>{
    try {
        const response = await airportService.deleteAirport(req.params.id);

        return res.status(201).json({
            data: response,
            success: true,
            message: 'successfully deleted a airport',
            err: {}
        })
    } catch (error) {
        console.log(error);

        return res.status(501).json({
            data: {},
            success: false,
            message: "not able to create a airport",
            err: error
        })
    }
}

const get = async (req,res)=>{
    try {
        const airport = await airportService.getAirport(req.params.id);

        return res.status(201).json({
            data: airport,
            success: true,
            message: "successfully fetched an airport",
            err: {}
        })
    } catch (error) {
        console.log(error);

        return res.status(501).json({
            data: {},
            success: false,
            message: "not able to create an airport",
            err: error
        })
    }
}

const update = async (req, res)=> {
    try {
        const airport = await airportService.updateAirport(req.params.id, req.body);

        return res.status(201).json({
            data: airport,
            success: true,
            message: "successfully updated an airport"
        })
    } catch (error) {
        console.log(error);

        return res.status(501).json({
            data: {},
            success: false,
            message: "not able to create an airport",
            err: error
        })
    }
}

const getAll = async (req,res)=>{
    try {
        const airports = await airportService.getAllAirports();

        return res.status(201).json({
            data: airports,
            success: true,
            message: "successfully updated an airport"
        })

    } catch (error) {
        console.log(error);

        return res.status(501).json({
            data: {},
            success: false,
            message: "not able to create an airport",
            err: error
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll,
}