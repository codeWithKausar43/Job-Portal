import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
 

 

const MyApplications = () => {
    const {user} = useAuth()
    const [jobs, setJobs] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
        .then(res => res.json())
        .then(data =>{
            setJobs(data)
        })
    },[user.email])

    return (
        <div>
            <h3> total Jobs : {jobs.length}</h3>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
   {
    jobs.map(job =>  <tr key={job._id}>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={job.company_logo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{job.applicant_email}</div>
              <div className="text-sm opacity-50">{job.title}</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">Delete</button>
        </th>
      </tr>)
   }
     
      
     
    </tbody>
 
     
  </table>
</div>
        </div>
    );
};

export default MyApplications;