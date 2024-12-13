import { useEffect, useState } from "react";
import { LoadJobDataFormLS } from "../Utility/LocalStorage";
import { Link } from "react-router";
import { CiLocationOn } from "react-icons/ci";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";

const AppliedJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("../../jobs.json")
            .then(res => res.json())
            .then(data => {
                const StoredJobId = LoadJobDataFormLS();
                if (data.length) {
                    const appliedJobs = data.filter(job => StoredJobId.includes(job.id));
                    setJobs(appliedJobs);
                }
            })
    }, []);

    return (
        <div className="my-40 max-w-6xl mx-auto space-y-6">
            {
                jobs.map(job => <div key={job.id}>
                    <div className="border border-[#E8E8E8] flex items-center gap-10 rounded-md p-6">
                        <div className="bg-[#F4F4F4] px-10 py-20 rounded-lg">
                            <img className="bg-[#F4F4F4] w-full lg:w-40" src={job.logo} alt="" />
                        </div>
                        <div className="grow space-y-4">
                            <h2 className="font-extrabold text-2xl text-[#474747] mt-6">{job.job_title}</h2>
                            <p className="font-semibold text-xl text-[#757575] mt-2">{job.company_name}</p>
                            <button className="text-base font-extrabold text text-[#9873FF] px-5 py-2 rounded border border-[#9873FF] mr-6 cursor-pointer">{job.remote_or_onsite}</button>
                            <button className="text-base font-extrabold text text-[#9873FF] px-5 py-2 rounded border border-[#9873FF] mr-6 cursor-pointer">{job.job_type}</button>
                            <div className="flex items-center gap-6">
                                <span className="flex items-center gap-2 font-semibold text-xl text-[#757575]">
                                    <CiLocationOn></CiLocationOn>
                                    <p>{job.location}</p>
                                </span>
                                <span className="flex items-center gap-2 font-semibold text-xl text-[#757575]">
                                    <PiCurrencyCircleDollarLight></PiCurrencyCircleDollarLight>
                                    <p>Salary: {job.salary}</p>
                                </span>
                            </div>
                        </div>
                        <Link to={`/details/${job.job_title}/${job.id}`} className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-2 rounded font-extrabold text-xl text-white">View Details</Link>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AppliedJobs;