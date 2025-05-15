const axios = require("axios").default;

class BaseController {
    constructor(){
           this.axiosInstance = axios.create({
           responseStatus: function(){
            return true;
           },
           baseURL: 'https://jsonplaceholder.typicode.com'

         })
    }
   

}

module.exports = BaseController;
