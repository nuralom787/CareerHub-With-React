import { Link } from "react-router";

const NotFound = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-extrabold text-black">Oops!!</h1>
                <p className="font-bold text-2xl text-gray-600">Error: 404</p>
                <br />
                <Link to="/" className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-6 py-3 rounded-lg font-extrabold text-xl text-white">Go Back To Home</Link>
            </div>
        </div>
    );
};

export default NotFound;