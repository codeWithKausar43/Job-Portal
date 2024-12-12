import { Link, useLoaderData } from "react-router-dom";

 

const JobDetails = () => {
    const job= useLoaderData()
    const {
        _id,
        company,
        location,
        applicationDeadline,
      } = job;
      
    console.log(job)
    return (
        <div className="text-center my-12">
            <h3 className="text-2xl">Title {company}</h3>
            <p>{location}</p>
            <p>{applicationDeadline}</p>
       <Link to={`/jobApply/${_id}`}> <button className="btn btn-primary">Apply Now</button> </Link>
        </div>
    );
};

export default JobDetails;