import { useEffect, useState } from "react";
import { LoadJobDataFormLS } from "../Utility/LocalStorage";
import { Link } from "react-router";
import { CiLocationOn } from "react-icons/ci";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";


const AppliedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);


    useEffect(() => {
        fetch("../../jobs.json")
            .then(res => res.json())
            .then(data => {
                const StoredJobId = LoadJobDataFormLS();
                if (data.length) {
                    const appliedJobs = data.filter(job => StoredJobId.includes(job.id));
                    setJobs(appliedJobs);
                    setFilteredJobs(appliedJobs);
                }
            })
    }, []);


    // Filtered Function.
    const handleFilter = (data) => {
        if (data) {
            const filteredData = jobs.filter(job => job.remote_or_onsite.toLowerCase() === data.toLowerCase());
            setFilteredJobs(filteredData);
        } else {
            setFilteredJobs(jobs);
        }
    };


    return (
        <div className="my-40 max-w-6xl mx-auto px-4 xl:px-0 space-y-6">
            <div className="text-end">
                <details className="dropdown dropdown-end">
                    <summary className="btn m-1">Filter By <IoIosArrowDown /></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li className="font-bold"><button onClick={() => handleFilter("")}>All</button></li>
                        <li className="font-bold"><button onClick={() => handleFilter("remote")}>Remote</button></li>
                        <li className="font-bold"><button onClick={() => handleFilter("onsite")}>On Site</button></li>
                    </ul>
                </details>
            </div>
            {
                filteredJobs.map(job => <div key={job.id}>
                    <div className="border border-[#E8E8E8] flex flex-col md:flex-row items-center gap-6 lg:gap-10 rounded-md p-6">
                        <div className="bg-[#F4F4F4] px-6 lg:px-10 py-12 lg:py-20 rounded">
                            <img className="bg-[#F4F4F4] w-full md:w-24 lg:w-40" src={job.logo} alt="" />
                        </div>
                        <div className="grow space-y-4 text-center md:text-start">
                            <h2 className="font-extrabold text-2xl text-[#474747] mt-6">{job.job_title}</h2>
                            <p className="font-semibold text-xl text-[#757575] mt-2">{job.company_name}</p>
                            <button className="text-base font-extrabold text text-[#9873FF] px-5 py-2 rounded border border-[#9873FF] mr-6 cursor-pointer">{job.remote_or_onsite}</button>
                            <button className="text-base font-extrabold text text-[#9873FF] px-5 py-2 rounded border border-[#9873FF] mr-6 cursor-pointer">{job.job_type}</button>
                            <div className="flex flex-col lg:flex-row items-center md:items-start gap-4 lg:gap-6">
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