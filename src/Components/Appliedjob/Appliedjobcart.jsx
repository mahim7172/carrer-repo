
import { MdLocationPin } from 'react-icons/md';
import { BiDollarCircle } from 'react-icons/bi';
const Appliedjobcart = ({ data }) => {
    const { logo, job_title, company_name, salary, location, job_type, remote_or_onsite } = data
    return (
        <div className='mb-5'>
            <div className="hero md:flex border rounded-lg ">
                <div className="hero-content  flex-col lg:flex-row flex-1">
                   <div className='w-60 h-40 rounded-md flex items-center justify-center  bg-slate-50'> 
                    <img src={logo} className=" w-40 rounded-lg " />
                    </div>
                    <div>
                        <h1 className=" font-bold">{job_title}</h1>
                        <p className="py-3">{company_name}</p>
                        <div className=''>
                            <button className="btn btn-outline">{job_type}</button>
                            <button className="btn btn-outline">{remote_or_onsite} </button>
                        </div>
                        <div className="flex my-1">
                            <div className='flex gap-1 items-center '>
                                <MdLocationPin />
                                <p> {location}</p>
                            </div>
                            <div className='flex gap-1 items-center ml-4 '>
                                <BiDollarCircle />
                                <p>{salary}</p></div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 text-center hidden md:block ">
                    <button className="btn  ">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Appliedjobcart;
