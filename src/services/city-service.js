const {cityRepositary}=require('../repositary/index');

class CityServices{
    constructor(){
        this.cityRepositary=new cityRepositary();
    }
    async createCity(data){
        try {
            const city=await this.cityRepositary.createCity(data);
            return city;
        } catch (error) {
            console.log("something went wrong in city service");
            throw(error);
        }
    }
    
    async deletCity(CityId){
        try {
            const response=await this.cityRepositary.deletCity(cityId);
            return response;
        } catch (error) {
            console.log("something went wrong in city service");
            throw(error);
        }
        
    }
    
    async updateCity(cityId,data){
        try {
            const city=await this.cityRepositary.updateCity(cityId,data);
            return city;
        } catch (error) {
            console.log("something went wrong in city service");
            throw(error);
        }
        
    }
    
    async getCity(cityId){
        try {
            const city=await this.cityRepositary.getCity(cityId);
            return city;
        } catch (error) {
            console.log("something went wrong in city service");
            throw(error);
        }
    }
}