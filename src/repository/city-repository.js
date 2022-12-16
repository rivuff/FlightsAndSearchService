const { City } = require('../models/index');

class CityRepository{
    async createCity({ name }){
        try {
            const city = await City.create({
                name
            });
            return city;

        } catch (error) {
            console.log("something went wrong in the repository");
            throw{error};
        }
    }


    async deleteCity({cityId}){

        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            })
            return true;
        } catch (error) {
            console.log("something went wrong in the repository");
            throw{error}
        }
        
    }

    async updateCIty({cityId, data}){
        try {
            const city = City.update(data, {
                where: {
                    id : cityId
                }
            })
            return city;
        } catch (error) {
            console.log("something went wrong in the repository");
            throw{error}
        }
    }



    async getCity ({cityId}){
        try {
            const city = await City.findByPK(cityId);
            return city;
        } catch (error) {
            console.log("something went wrong in the repository");
            console.log();
        }
    }
}

module.exports = CityRepository