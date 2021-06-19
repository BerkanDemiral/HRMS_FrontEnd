import axios from "axios";

export default class JobPostionService{
    getJobPosition(){
        return axios.get("http://localhost:81/api/jobPosition/getall")
    }
}