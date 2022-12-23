const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper')

class FlightService{
    constructor(){
        this.AirplaneRepository = new AirplaneRepository();
        this.FlightRepositry = new FlightRepository();
    }

    async createFLight(data){
        try {

            if(!compareTime(data.arrivalTime, data.departureTime)) {
                throw {error: 'Arrival time cannot be earlier than departure time'};
            }

            const airplane = await this.AirplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.FlightRepositry.createFlight({...data, totalSeats:airplane.capacity})
            return flight;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error}
        }
    }

    async getAllFlightData(data){
        try {
            const flights = await this.FlightRepositry.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw {error}
        }
    }

}


module.exports = FlightService