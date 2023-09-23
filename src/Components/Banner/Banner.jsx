

const Banner = () => {
    return (
        <div className="grid md:grid-cols-2 md:px-14 px-5 ">
            <div className="md:mt-20 md:ml-10 ">
                <h1 className="text-5xl  font-bold  ">
                    One Step <br /> Closer To Your <br /> <span className="text-[#3a7bd5]">Dream Job</span>
                </h1>
                <p className="py-7">
                    Explore thousands of job opportunities with all
                    the information you need. Its your future. Come find it.
                    Manage all your job application from start to finish.
                </p>
                <button className="hidden md:block btn">Get Started</button>
            </div>
            <div>
                <img className="w-auto" src="user.png" alt="" />
               <div className=" flex justify-center">
               <button className="md:hidden block btn  my-5">Get Started</button>
               </div>
            </div>
        </div>
    );
};

export default Banner;