import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreJobApplication } from "../Utility/Localstorage";
import { list } from "postcss";
import Job from "../Job/Job";

const Applidjob = () => {
    const [appliedJob, setAppliedJob] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])

    const handleJobFilter = filter => {
        if (filter === "all") {
            setDisplayJobs(appliedJob)
        } else if (filter === "remote") {
            const remoteJobs = appliedJob.filter(job => job.remote_or_onsite === "Remote")
            setDisplayJobs(remoteJobs)
        } else if (filter === "onside") {
            const onsideJobs = appliedJob.filter(job => job.remote_or_onsite === "Onsite")
            setDisplayJobs(onsideJobs)
        }
    }
    const jobs = useLoaderData();
    // console.log(jobs)

    useEffect(() => {
        const storeJobsIds = getStoreJobApplication()
        if (jobs.length > 0) {
            // option 1
            const jobsApplied = jobs.filter(job => storeJobsIds.includes(job.id))
            //  option 2
            /*   const jobApplied = [];
              for (const id of storeJobsIds) {
                  const job = jobs.find(job => job.id === id)
                  if (job) {
                      jobApplied.push(job)
                  }
              } */
            setAppliedJob(jobsApplied)
            setDisplayJobs(jobsApplied)

        }
    }, [jobs])
    // console.log(appliedJob)
    return (
        <div>
            <h1 className="text-2xl">Applied job :{appliedJob?.length} </h1>
            <details className="dropdown mb-32">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobFilter('onside')}><a>Onside</a></li>
                </ul>
            </details>
            <ul>
                {
                    displayJobs.map(data => <li key={data.id}>{data.company_name}</li>)
                }
            </ul>
        </div>
    );
};

export default Applidjob;