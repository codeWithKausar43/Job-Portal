import { Link, useLoaderData } from "react-router-dom";

 

const JobDetails = () => {
    const job= useLoaderData()
    const {
        _id,
        company,
        location,
        applicationDeadline,
        title
      } = job;
      
    console.log(job)
    return (
        <div className="text-center my-12">
            <h3 className="text-2xl">Title {title}</h3>
            <p>{company}</p>
            <p>{location}</p>
            <p>{applicationDeadline}</p>
       <Link to={`/jobApply/${_id}`}> <button className="btn btn-primary">Apply Now</button> </Link>
        </div>
    );
};

export default JobDetails;