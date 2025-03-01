const City=require('../models/City');

class cityRepositary{
    async createCity({name}){
        try {
            const city=await City.create({name});
            return city;
        } catch (error) {
            console.log("something went wrong in city repo");
            throw(error);
        }
    }

    async deleteCity({cityId}){
        try {
            await City.destroy({
                where:{
                    id:cityId
                }
            });
        } catch (error) {
            console.log('something went wrong in city repo');
            throw(error);
        }
    }
    
    async updateCity({cityId,data}){
        try {
            const city=await City.update(data,{
                where:{
                    id:cityId
                }
            });
            return city;
        } catch (error) {
            console.log('something went wrong in city repo');
            throw(error);
        }
    }
    
    async getCity({cityId}){
        try {
            const city=await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log('something went wrong in city repo');
            throw(error);
        }
    }
}

module.exports=cityRepositary;