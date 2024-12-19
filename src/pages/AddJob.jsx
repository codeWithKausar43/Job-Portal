import useAuth from "../hooks/useAuth";

const AddJob = () => {
    const {user} = useAuth()
const handleAddJob = e => {
    e.preventDefault()
    const formData = new FormData(e.target);
   const initialData = Object.fromEntries(formData.entries())
    const {min, max, currency, ...newData} = initialData
     newData.salaryRange = {min,max,currency}
    newData.responsibility = newData.responsibility.split('\n')
    newData.requirements = newData.requirements.split('\n')
    console.log(newData,)
  
    fetch('http://localhost:5000/jobs',{
        method:"POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newData)
    })
    .then(res => res.json())
   .then(data => {
    console.log(data)
   }) 
}

  return (
    <div>
      <h3>add job</h3>
      <div className="card bg-base-100 w-full  shadow-2xl">
        <form onSubmit={handleAddJob} className="card-body">
            {/* job title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="job title"
              className="input input-bordered"
              required
            />
          </div>
{/* job location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">job Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="job location"
              className="input input-bordered"
              required
            />
          </div>
          {/* job type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">job type</span>
            </label>
            <select defaultValue="select a job type" name="type" className="select select-info w-full max-w-xs">
              <option disabled >
                select a job type
              </option>
              <option>full time</option>
              <option>intern</option>
              <option>part time</option>
            </select>
          </div>
          {/* job category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">job category</span>
            </label>
            <select defaultValue="select a job category" name="category" className="select select-info w-full max-w-xs">
              <option disabled >
                select a job category
              </option>
              <option>engineering</option>
              <option>marketing</option>
              <option>finance</option>
            </select>
          </div>
          {/* salary range */}
          <p>Salary Range</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Max</span>
            </label>
            <input
              type="text"
              name="max"
              placeholder="max-price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">min</span>
            </label>
            <input
              type="text"
              name="min"
              placeholder="Min-price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">currency</span>
            </label>
            <select defaultValue="currency" name="currency" className="select select-info w-full max-w-xs">
              <option disabled >
                currency
              </option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
            </select>
          </div>
          </div>
           {/* job requirements */}
           <div className="form-control">
            <label className="label">
              <span className="label-text">job requirements</span>
            </label>
            <textarea name="requirements" className="textarea textarea-bordered" placeholder="write each requirements in a new line" required></textarea>
          </div>
          {/* job requirements */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">job responsibility</span>
            </label>
            <textarea name="responsibility" className="textarea textarea-bordered" placeholder="write each responsibility in a new line" required></textarea>
          </div>
          {/*HR NAME */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">hr name</span>
            </label>
            <input
              type="text"
              name="hr_name"
              placeholder="hr name"
              className="input input-bordered"
              required
            />
          </div>
          {/* Deadline */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">deadline</span>
            </label>
            <input
              type="date"
              name="applicationDeadline"
              placeholder="deadline"
              className="input input-bordered"
              required
            />
          </div>
         {/* hr email*/}
         <div className="form-control">
            <label className="label">
              <span className="label-text">hr email</span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              name="hr-email"
              placeholder="hr email"
              className="input input-bordered"
              required
            />
          </div>
          {/* company logo */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">logo</span>
            </label>
            <input
              type="url"
              name="company_logo"
              placeholder="company logo url"
              className="input input-bordered"
              required
            />
          </div>
          {/* submit button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Job</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
