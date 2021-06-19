import axios from "axios";

export default class ResumeService{
    getResume(){
        return axios.get("http://localhost:81/api/resume/getAll")
    }
    getByResumeId(resumeId){
        return axios.get("http://localhost:81/api/jobPosting/getById?id="+resumeId)
    }
    updateGithub(githubLink, resumeId){
        return axios.get("http://localhost:81/api/resume/updateGithub?githubLink="+githubLink+"&resumeId="+resumeId)
    }
    updateAll(githubLink, linkedinLink, resumeId){
        return axios.get("http://localhost:81/api/resume/updateAll?githubLink="+githubLink+"&linkedinLink="+linkedinLink+"&resumeId="+resumeId)
    }
    updateLinkedin(linkedinLink, resumeId){
        return axios.get("http://localhost:81/api/resume/updateLinkedin?linkedinLink="+linkedinLink+"&resumeId="+resumeId)
    }
    getById(resumeId){
        return axios.get("http://localhost:81/api/resume/findById?id="+resumeId)
    }

}