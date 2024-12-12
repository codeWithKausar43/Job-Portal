import { useParams } from "react-router-dom";

 

const JobApply = () => {
    const {id} = useParams()
 

const handleFromSubmit = e =>{
    e.preventDefault()
    const from = e.target
    const linked = from.linked.value;
    const github = from.github.value;
    const resume = from.resume.value;
    console.log(linked, github,resume)
}
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
        </div>
      </div>
    );
};

export default JobApply;