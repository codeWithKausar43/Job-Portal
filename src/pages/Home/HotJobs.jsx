import { useEffect, useState } from "react";
import HotJobsCard from "./HotJobsCard";

 

const HotJobs = () => {
    const [jobs, setJobs] = useState([])
    console.log(jobs)
    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res =>  res.json())
        .then(data => {
            setJobs(data)
        })
    },[])
    return (
        <div>
            <h2 className="text-center font-semibold text-2xl mt-12">Hot Hot Job Collections</h2>
       
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {
                    jobs.map(job => <HotJobsCard key={job._id} job={job}></HotJobsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;