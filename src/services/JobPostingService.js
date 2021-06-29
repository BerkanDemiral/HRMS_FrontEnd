import axios from "axios";

export default class JobPostingService{
    getJobPosting(){
        return axios.get("http://localhost:81/api/jobPosting/getall")
    }
    getById(jobPostingId){
        return axios.get("http://localhost:81/api/jobPosting/getById?id="+jobPostingId)
    }

    

}