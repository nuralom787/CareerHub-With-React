import { toast } from "react-toastify";


const LoadJobDataFormLS = () => {
    const data = localStorage.getItem("jobs");
    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
};

const SaveAppliedJobs = (id, title) => {
    const storedJobApplication = LoadJobDataFormLS();
    const exists = storedJobApplication.find(jobId => jobId === id);
    if (!exists) {
        storedJobApplication.push(id);
        localStorage.setItem("jobs", JSON.stringify(storedJobApplication));
        toast.info(`You Applied For "${title}"`, { autoClose: 2000 });
    } else {
        toast.warning("You Already Applied For This Job!!")
    }

};

export { SaveAppliedJobs, LoadJobDataFormLS };