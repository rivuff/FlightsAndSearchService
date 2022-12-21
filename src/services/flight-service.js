const {AirplaneRepository, FlightRepositry} = require('../repository/index');

class FlightService{
    constructor(){
        this.AirplaneRepository = new AirplaneRepository();
    }

    async createFLight(data){
        try {
            const airplane = this.AirplaneRepository.getAirplane(data.airplaneId);
            return airplane;
        } catch (error) {
            
        }
    }
}