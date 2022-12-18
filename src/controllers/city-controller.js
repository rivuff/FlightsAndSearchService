const {CityService} = require('../services/index');

const cityService = new CityService();


const create = async (req,res)=>{
    try {
        const city = await cityService.createCity(req.body);

        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully created a city",
            err: {}
        })
    } catch (error) {
        console.log(error);

        return res.status(501).json({
            data: {},
            success: false,
            message: "not able to create a city",
            err: error
        })
    }
}


//Delete: /city/:id
const destroy = async (req,res)=>{
    try {
        const response = await cityService.deleteCity(req.params.id);

        return res.status(200).json({
            data: response,
            success:true,
            meassage: "successfully deleted the city",
            err:{}
        })
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to deleted the city",
            err: error
        })
    }
}

//GET : /city/:id
const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a city',
            err: {}
        });
    } 
    catch (error) {
        console.log(error);

        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the city',
            err: error
        });
    }
}

// PATCH: /city/:id
const update = async (req,res)=>{
    try {
        const city = await cityService.updateCity(req.params.id, req.body);

        return res.status(200).json({
            data: city,
            success:true,
            meassage: "successfully fetch the city",
            err:{}
        })
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to fetch the city",
            err: error
        }) 
    }
}

const getAll = async (req,res)=>{
    try {
        const city = await cityService.getAllCities(req.query);

        return res.status(200).json({
            data: city,
            success:true,
            meassage: "successfully fetch the city",
            err:{}
        })
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to fetch the city",
            err: error
        }) 
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}