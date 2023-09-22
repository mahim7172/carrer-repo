import { MdLocationPin } from 'react-icons/md';
import { BiDollarCircle} from 'react-icons/bi';
import { Link } from 'react-router-dom';
const Job = ({ job }) => {
  const {id, phone, contact_information, experiences, educational_requirements, job_type, job_responsibility, job_description, company_name, salary, email, remote_or_onsite, address, location, logo, job_title } = job
  return (
    <div>
      <div className="card pt-7 bg-base-100 shadow-xl">
        <figure><img src={logo} alt="Shoes" /></figure>
        <div className="card-body text-left">
          <h2 className="card-title ">
            {job_title}
          </h2>

          <p className='my-1'><span>{company_name}</span></p>
          <div className="flex gap-3">
            <button className="border-[#7E90FE] text-[#7E90FE] border rounded-md px-5 py-2">{remote_or_onsite}</button>
            <button className="border-[#7E90FE] text-[#7E90FE] border rounded-md px-5 py-2">{job_type}</button>

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
          <Link to={`/job/${id}`}><button className="btn ">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Job;