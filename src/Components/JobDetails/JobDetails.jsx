import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { PiCurrencyCircleDollarLight, PiSubtitles, PiPhone } from "react-icons/pi";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { toast } from "react-toastify";
import { SaveAppliedJobs } from "../Utility/LocalStorage";

const JobDetails = () => {
    const [job, setJob] = useState({});
    const { id } = useParams();

    const { job_title, salary, contact_information, job_description, job_responsibility, educational_requirements, experiences } = job;


    useEffect(() => {
        window.scroll(0, 0)
        fetch("../../jobs.json")
            .then(res => res.json())
            .then(data => {
                const idJob = data.find(dt => dt.id === parseInt(id));
                setJob(idJob);
            })
    }, []);


    // Toast Messages.
    const ApplyJob = () => {
        SaveAppliedJobs(parseInt(id), job_title);
    };

    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 my-20 px-6 xl:px-0">
            <div className="col-span-1 md:col-span-3 space-y-8">
                <p className="font-medium text-base text-[#757575]"><span className="font-extrabold text-base text-[#1A1919]">Job Description: </span>{job_description}</p>
                <p className="font-medium text-base text-[#757575]"><span className="font-extrabold text-base text-[#1A1919]">Responsibility: </span>{job_responsibility}</p>
                <p className="font-extrabold text-base text-[#1A1919]">Educational Requirement: </p>
                <p className="font-medium text-base text-[#757575]">{educational_requirements}</p>
                <p className="font-extrabold text-base text-[#1A1919]">Experiences: </p>
                <p className="font-medium text-base text-[#757575]">{experiences}</p>
            </div>
            <div className="col-span-1 md:col-span-2">
                <div className="bg-gradient-to-r from-[#F9F9FF] to-[#FAF8FF] p-8 rounded-lg space-y-7 mb-5">
                    <div>
                        <h1 className="font-extrabold text-xl text-[#1A1919] pb-3 border-b border-[#FAF8] mb-4">Job Details</h1>
                        <div className="flex items-start gap-2 mb-3">
                            <p className="text-[#9873FF] text-3xl font-extrabold">
                                <PiCurrencyCircleDollarLight></PiCurrencyCircleDollarLight>
                            </p>
                            <p className="font-bold text-xl text-[#474747]">
                                Salary: <span className="font-medium text-[#757575]">{salary}</span>
                            </p>
                        </div>
                        <div className="flex items-start gap-2 mb-3">
                            <p className="text-[#9873FF] text-3xl font-extrabold">
                                <PiSubtitles></PiSubtitles>
                            </p>
                            <p className="font-bold text-xl text-[#474747]">
                                Job Title: <span className="font-medium text-[#757575]">{job_title}</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-extrabold text-xl text-[#1A1919] pb-3 border-b border-[#FAF8] mb-4">Contact Information</h1>
                        <div className="flex items-start gap-2 mb-3">
                            <p className="text-[#9873FF] text-3xl font-extrabold">
                                <PiPhone></PiPhone>
                            </p>
                            <p className="font-bold text-xl text-[#474747]">
                                Phone: <span className="font-medium text-[#757575]">{contact_information?.phone}</span>
                            </p>
                        </div>
                        <div className="flex items-start gap-2 mb-3">
                            <p className="text-[#9873FF] text-3xl font-extrabold">
                                <HiOutlineMail></HiOutlineMail>
                            </p>
                            <p className="font-bold text-xl text-[#474747]">
                                Email: <span className="font-medium text-[#757575]">{contact_information?.email}</span>
                            </p>
                        </div>
                        <div className="flex items-start gap-2 mb-3">
                            <p className="text-[#9873FF] text-3xl font-extrabold">
                                <HiOutlineLocationMarker></HiOutlineLocationMarker>
                            </p>
                            <p className="font-bold text-xl text-[#474747]">
                                Address: <span className="font-medium text-[#757575]">{contact_information?.address}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <button onClick={() => ApplyJob()} className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-4 py-2 rounded font-extrabold text-xl text-white w-full">Apply Now</button>
            </div>
        </div>
    );
};

export default JobDetails;