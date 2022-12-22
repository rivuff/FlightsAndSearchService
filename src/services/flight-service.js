const { FlightRepository, AirplaneRepository } = require('../repository/index');

class FlightService{
    constructor(){
        this.AirplaneRepository = new AirplaneRepository();
        this.FlightRepositry = new FlightRepository();
    }

    async createFLight(data){
        try {
            const airplane = await this.AirplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.FlightRepositry.createFlight({...data, totalSeats:airplane.capacity})
            return flight;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error}
        }
    }
}

module.exports = FlightService