import axios from "axios";

const CUSTOMERS_API_BASE_URL = "http://localhost:8080/api/v1/customers";

class CustomersService {

    getCustomers() {
        return axios.get(CUSTOMERS_API_BASE_URL);
    }

     async createCustomers(customers) {
        //return axios.post(CUSTOMERS_API_BASE_URL, customers);
        try {
            const res = await axios.post(CUSTOMERS_API_BASE_URL, customers);
            return console.log(res.data);
        } catch (err) {
            return console.log(err);
        }
    }

    async getCustomersById(customersId) {
        try {
        const res = await axios.get(CUSTOMERS_API_BASE_URL + '/' + customersId);
       return console.log(res.data);
    } catch(err) {
        return console.log(err);
    }
}

    async updateCustomers(customers, customersId) {
        try {
        const res = await axios.put(CUSTOMERS_API_BASE_URL + '/' + customersId, customers);
        return console.log(res.data);
    } catch(err) {
        return console.log(err);
    }
}

    async deleteCustomers(customersId) {
        try {
        const res= await axios.delete(CUSTOMERS_API_BASE_URL + '/' + customersId);
        return console.log(res.data);
    } catch(err) {
        return console.log(err);
    }
}
}
    



export default new CustomersService()