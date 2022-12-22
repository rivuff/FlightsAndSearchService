const {Flights} = require('../models/index');

class FlightRepository{

    #createFilter(data){
        let filter = {}
        if(data.arrivalAirportId){
            filter.arrivalArrivalAirportId = data.arrivalArrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        if(data.minPrice){
            Object.assign(filter,{price: {[Op.gte]: data.minPrice}});
        }

        return filter
    }

    async createFlight(data){
        try {
            const flight =await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw(error);
        }
        
    }

    async getFlight(flightId){
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw(error);
        }
    }

    async getAllFlights(filter){
        try {
            const fliterObject = this.createFilter(filter);
            const flights = await Flights.findall({
                where: fliterObject
            });
            return flights;
        } catch (error) {
            
        }
    }
}

module.exports = FlightRepository