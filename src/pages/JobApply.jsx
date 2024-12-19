import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

 

const JobApply = () => {
    const {id} = useParams()
const {user} = useAuth()
const navigate = useNavigate()

const handleFromSubmit = e =>{
    e.preventDefault()
    const from = e.target
    const linkedIn = from.linked.value;
    const github = from.github.value;
    const resume = from.resume.value;
    // console.log(linked, github,resume)
const jobApplication = {
  job_id : id,
  applicant_email : user.email,
  linkedIn,
  github,
  resume
}

fetch('http://localhost:5000/job-applications',{
  method:'POST',
 headers:{ 
  'content-type' : 'application/json'
},
  body:JSON.stringify(jobApplication)
})
.then(res => res.json())
.then(data => {
  console.log(data)
  if(data.insertedId){
    alert(" Application successful! ")
  }
  navigate("/myApplyJob")
})
     
}
    return (
        
          <div className="card bg-base-100 w-full  shadow-2xl">
            <form onSubmit={handleFromSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">LinkedUrl</span>
                </label>
                <input type="url" name="linked" placeholder="LinkedUrl" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">GitHub Url</span>
                </label>
                <input type="url" name="github" placeholder="GitHub url" className="input input-bordered" required />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">resume</span>
                </label>
                <input type="url" name="resume" placeholder="resume url" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        
    );
};

export default JobApply;