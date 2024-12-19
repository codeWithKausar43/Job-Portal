import { useState } from "react";
import useAuth from "../hooks/useAuth";

 

const MyPostedJobs = () => {
    const {user} = useAuth()
    const [jobs, setJobs] = useState({})
    console.log(jobs)
    fetch(`http://localhost:5000/jobs?email=${user.email}`)
    .then(res => res.json())
    .then(data => setJobs(data))
    return (
        <div>
        <h3>my posted jobs {jobs.length}</h3>
        </div>
    );
};

export default MyPostedJobs;