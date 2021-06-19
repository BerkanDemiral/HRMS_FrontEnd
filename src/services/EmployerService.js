import axios from "axios";

export default class EmployerService{
    getEmployer(){
        return axios.get("http://localhost:81/api/employer/getall")
    }
    getByEmployerId(employerId){
        return axios.get("http://localhost:81/api/employer/getById?id="+employerId)
    }
}