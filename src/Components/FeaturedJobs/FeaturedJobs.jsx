import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);


    useEffect(() => {
        fetch("jobs.json")
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);


    return (
        <div className="max-w-6xl mx-auto mt-20">
            <div className="text-center my-10 space-y-4">
                <h1 className="font-extrabold text-5xl text-[#1A1919]">Featured Jobs</h1>
                <p className="font-medium text-base text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    jobs.slice(0, dataLength).map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>
            <div className={dataLength > 4 ? "hidden my-8 text-center" : "my-8 text-center"}>
                <button onClick={() => setDataLength(jobs.length)} className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-6 py-3 rounded-md font-extrabold text-xl text-white">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;