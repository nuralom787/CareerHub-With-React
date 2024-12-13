import { CiLocationOn } from "react-icons/ci";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
import { Link } from "react-router";


const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;


    return (
        <div className="border border-[#E8E8E8] rounded-md p-6">
            <div>
                <img src={logo} alt="" />
                <h2 className="font-extrabold text-2xl text-[#474747] mt-6">{job_title}</h2>
                <p className="font-semibold text-xl text-[#757575] mt-2">{company_name}</p>
            </div>
            <div className="mt-6">
                <span className="text-base font-extrabold text text-[#9873FF] px-5 py-2 rounded border border-[#9873FF] mr-6 cursor-pointer">{remote_or_onsite}</span>
                <span className="text-base font-extrabold text text-[#9873FF] px-5 py-2 rounded border border-[#9873FF] mr-6 cursor-pointer">{job_type}</span>
            </div>
            <div className="mt-6 mb-8 flex items-center gap-8">
                <span className="flex items-center gap-2 font-semibold text-xl text-[#757575]">
                    <CiLocationOn></CiLocationOn>
                    <p>{location}</p>
                </span>
                <span className="flex items-center gap-2 font-semibold text-xl text-[#757575]">
                    <PiCurrencyCircleDollarLight></PiCurrencyCircleDollarLight>
                    <p>Salary: {salary}</p>
                </span>
            </div>
            <Link to={`/details/${job_title}/${id}`} className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-2 rounded-lg font-extrabold text-xl text-white">View Details</Link>
        </div>
    );
};

export default Job;