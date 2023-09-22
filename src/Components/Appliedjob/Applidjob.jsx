import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreJobApplication } from "../Utility/Localstorage";
import { list } from "postcss";
import Job from "../Job/Job";

const Applidjob = () => {
    const [appliedJob, setAppliedJob] = useState()
    const jobs = useLoaderData();
    console.log(jobs)
    
    useEffect(() => {
        const storeJobsIds = getStoreJobApplication()
        if (jobs.length > 0) {
            //  const jobsApplied = jobs.filter(job=> storeJobsIds.includes(job.id))
            const jobApplied = [];
            for (const id of storeJobsIds) {
                const job = jobs.find(job => job.id === id)
                if (job) {
                    jobApplied.push(job)
                }
            }
            setAppliedJob(jobApplied)
          
        }
    }, [jobs])
    console.log(appliedJob)
    return (
        <div>
            <h1 className="text-2xl">Applied job :{appliedJob?.length} </h1>
            <ul>
                {
                    appliedJob.map(data => <li key={data.id}>{data.company_name}</li>)
                }
            </ul>
        </div>
    );
};

export default Applidjob;