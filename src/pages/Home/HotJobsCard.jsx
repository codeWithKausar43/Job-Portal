/* eslint-disable react/prop-types */
import { p } from "motion/react-client";
import { FaDollarSign } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
const HotJobsCard = ({ job }) => {
  console.log(job);
  const {
    applicationDeadline,
    category,
    company,
    company_logo,
    description,
    hr_email,
    hr_name,
    jobType,
    location,
    requirements,
    responsibilities,
    salaryRange,
    status,
    title,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <div className="flex gap-2">
      <figure>
        <img className="w-16"
          src={company_logo}
          alt="Shoes"
        />
      </figure>
      <div>
        <h3 className="text-lg">{company}</h3>
        <p className="text-sm flex items-center"> <IoLocationSharp /> {location}</p>
      </div>
      </div>
      <div className="card-body">
       <div className="flex items-center gap-2">
       <h2 className="card-title">{category}</h2>
       <div className="badge badge-secondary">NEW</div>
       </div>
        <p>{description}</p>
     <p className="flex flex-wrap gap-2 ">
     {
        requirements?.map((req, index) => <p className="border text-center hover:text-purple-700 hover:bg-gray-200 rounded-xl" key={index}> {req} </p>)
      }
     </p>
        <div className="card-actions justify-end items-center">
            <p className="flex items-center">Salary : <FaDollarSign></FaDollarSign> {salaryRange.min}-{salaryRange.max} {salaryRange.currency} </p>
          <button className="btn btn-primary">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default HotJobsCard;
