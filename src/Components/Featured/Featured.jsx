import { useEffect, useState } from "react";
import Job from "../Job/Job";


const Featured = () => {
    const [jobs , setJobs] = useState([])
    const [ dataLength, setDataLength]= useState(4)
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=> setJobs(data))
    },[])
    return (
        <div>
           <div className="text-center">
           <h1 className="text-4xl font-bold ">Featured Jobs {jobs.length}</h1>
            <p>
                Explore thousands of job
                opportunities with all the
                information you need.
                Its your future
            </p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-7 my-20 mx-10">
            {
                jobs.slice(0,dataLength).map(job=> <Job key={job.id} job={job}></Job>)
            }
           </div>
           <div className={dataLength === jobs.length ?" hidden" : " text-center my-5"}>
            <button onClick={()=> setDataLength(jobs.length)} className="btn text-black ">Show All</button>
           </div>
        </div>
    );
};

export default Featured;