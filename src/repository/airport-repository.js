const { Op } = require('sequelize');
const {Airport} = require('../models/index');


class AirportRepository{

    async createAirport(data) {
        try {
            const airport = await Airport.create({ 
                name: data.name, 
                cityId: data.cityId 
            });
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }


    async deleteAirport(airportId){
        try {
            const airport = await Airport.destroy({
                where: {
                    id: airportId
                }
            });
            
            return airport
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAirport(airportId){
        try {
            const airport = await Airport.findByPk(airportId);
            return airport
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateAirport(airportId, data){
        try {
            const airport = await Airport.update(data, {
                where:{
                    id:airportId
                }
            })

            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async findAll(filter){
        try {
            try {
                if(filter.name){
                    const airports = await Airport.findAll({
                        where: {
                            name: {
                                [Op.startsWith]: filter.name
                            }
                        }
                    })
                    return airports;
                }

                const airports = await Airport.findAll();
                return airports;
            } catch (error) {
                console.log("Something went wrong in the repository layer");
                throw {error};
            }
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = AirportRepository