import axios from "axios";

export default class CandidateService{
    getCandidates(){
        return axios.get("http://localhost:81/api/candidates/getall")
    }
}

