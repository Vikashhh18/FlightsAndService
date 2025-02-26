const {City}=require('../models');

class cityRepositary{
    async createCity({name}){
        try{
            const city=await City.create({name});
            return city;
        }
        catch(err){
            console.error("Error creating city:", err);
            throw {err};
        }
    }
    async deleteCity({id}){
        try{
            await City.destroy({
                where:{
                    id:id
                }
            });
        }catch(err){
            throw(err);
        }
    }
}

module.exports=cityRepositary;