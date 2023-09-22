import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/Localstorage";
const Jobdetails = () => {
    const jobs = useLoaderData()
    const {id}= useParams()
    const parseId = parseInt(id)
    const job = jobs.find(job => job.id === parseId)
    

    const handleApplyJob = () => {
        toast('You have apply successfully')
        saveJobApplication(parseId)
    }
    return (
        <div>
        
            <div className="grid gap-4 md:grid-cols-4 ">
                <div className="grid border md:col-span-3 gap-5 px-10 py-5">
                    <h1>Job details of :{job.job_title} </h1>
                    <p>{job.company_name}</p>
                    <p>Job Description : {job.job_description}</p>
                    <p>Job Responsibility : {job.job_responsibility}</p>
                    <p>Educational Requirements : {job.educational_requirements}</p>
                    <p>Experiences : {job.experiences}</p>
                    </div>
                    <div className="border">
                        <h2>Job Details</h2>
                        <button onClick={handleApplyJob} className="btn w-full ">Apply Now</button>
                    </div>
                    <ToastContainer />
            </div>
        </div>
    );
};

export default Jobdetails;