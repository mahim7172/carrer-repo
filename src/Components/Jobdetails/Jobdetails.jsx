import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/Localstorage";
const Jobdetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const parseId = parseInt(id)
    const job = jobs.find(job => job.id === parseId)


    const handleApplyJob = () => {
        toast('You have apply successfully')
        saveJobApplication(parseId)
    }
    return (
        <div className="text-white">

            <div className="grid gap-4 md:grid-cols-4 ">
                <div className="grid border md:col-span-3 gap-5 px-10 py-5 rounded-lg">
                    <h1><span className="font-bold">Job details of : </span><span className="font-normal">{job.job_title}</span> </h1>
                    <p><span className="font-bold">Company : </span> <span className="font-normal">{job.company_name}</span></p>
                    <p><span className="font-bold">Job Description :</span> <span className="font-normal">{job.job_description}</span></p>
                    <p><span className="font-bold">Job Responsibility :</span> <span className="font-normal">{job.job_responsibility}</span></p>
                    <p><span className="font-bold">Educational Requirements :</span> <span className="font-normal">{job.educational_requirements}</span></p>
                    <p><span className="font-bold">Experiences : </span><span className="font-normal">{job.experiences}</span></p>
                </div>
                <div className="border rounded-lg px-5 ">
                    <h2 className="text-2xl text-center font-bold">Job Details</h2>
                    <hr className="mb-3 mt-1" />
                    <p><span className="font-bold">Salary : </span><span className="font-norlam">{job.salary}</span></p>
                    <p><span className="font-bold">Job Title : </span><span className="font-norlam">{job.job_title}</span></p>
                    <h2 className="text-2xl text-center font-bold mt-7  ">Contact Information</h2>
                    <hr className="mb-3 mt-1" />
                    <p><span className="font-bold">Phone :  </span><span className="font-norlam">{job?.contact_information.phone}</span></p>
                    <p><span className="font-bold">Email :   </span><span className="font-norlam">{job?.contact_information.email}</span></p>
                    <p><span className="font-bold">Address :  </span><span className="font-norlam">{job?.contact_information.address}</span></p>
                    <button onClick={handleApplyJob} className="btn w-full mt-8 mb-3">Apply Now</button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Jobdetails;