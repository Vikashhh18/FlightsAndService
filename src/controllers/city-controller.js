const { CityServices } = require('../repositary/index');
const cityServices = new CityServices();

const create = async (req, res) => {
    try {
        const city = await cityServices.createCity(req.body);
        return res.status(201).json({
            data: city,
            sucess: true,
            message: "successfull created",

        });
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            data: {},
            sucess: false,
            message: "not able to created a city"
        })
    }
}

const destroy = async (req, res) => {
    try {
        const response = await cityServices.deletCity(req.params.id);
        return res.status(200).json({
            data: response,
            sucess: true,
            message: "susscefully daleted"
        })
    } catch (error) {
        console.log(error)
        return res.status(501).json({
            data: {},
            sucess: false,
            message: "not able to created a city"
        })
    }

}

const update = async (req, res) => {
    try {
        const city = await cityServices.getCity(req.params.id,req.body);
        return res.status(200).json({
            data: response,
            sucess: true,
            message: "susscefully update the city"
        })
    } catch (error) {
        console.log(error)
        return res.status(501).json({
            data: {},
            sucess: false,
            message: "not able to update a city"
        })
    }

}

const get = async (req, res) => {
    try {
        const city = await cityServices.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            sucess: true,
            message: "susscefully get the city"
        })
    } catch (error) {
        console.log(error)
        return res.status(501).json({
            data: {},
            sucess: false,
            message: "not able to get a city"
        })
    }

}

