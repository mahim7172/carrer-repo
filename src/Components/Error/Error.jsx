import { NavLink } from "react-router-dom";


const Error = () => {
    return (
        <div className="align-middle text-center border-2 border-white p-10 rounded-2xl h-screen">
            <h2 className="text-7xl my-10 font-extrabold text-white">Oops !!!</h2>
            <NavLink to="/"><button className="btn text-black ">Go To Home</button></NavLink>
        </div>
    );
};

export default Error;