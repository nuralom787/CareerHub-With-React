import { Link } from "react-router";
import banner from "../../assets/images/user.png";


const Banner = () => {
    return (
        <div className="rounded-md lg:rounded-none bg-gradient-to-r from-[#F9F9FF] to-[#FAF8FF] pt-10 pb-2 lg:pb-0 mb-10">
            <div className="max-w-6xl mx-auto lg:flex justify-between items-center lg:gap-16 px-2 md:px-0">
                <div className="text-center lg:text-start">
                    <div className="space-y-2">
                        <h1 className="font-extrabold text-5xl md:text-7xl text-[#1A1919]">One Step</h1>
                        <h1 className="font-extrabold text-5xl md:text-7xl text-[#1A1919]">Closer To Your</h1>
                        <h1 className="font-extrabold text-5xl md:text-7xl text-[#9873FF]">Dream Job</h1>
                    </div>
                    <div>
                        <p className="my-10">Explore thousands of job opportunities with all the <br className="hidden md:block" /> information you need. Its your future. Come find it. Manage all <br className="hidden md:block" />your job application from start to finish.</p>
                        <Link to={`/`} className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-6 py-3 rounded-lg font-extrabold text-xl text-white block w-full md:w-fit mb-8 lg:mb-0 md:mx-auto lg:mx-0">Get Started</Link>
                    </div>
                </div>
                <div>
                    <img className="hidden lg:block" src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;