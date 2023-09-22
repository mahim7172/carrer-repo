

const Category = ({cate}) => {
    const {id, category_name,logo,availability}= cate
    return (
        <div className=" bg-slate-700 rounded-lg  pb-5  ">
            
          <div className="hidden md:block">
          <img className="md:mt-10 md:ml-10" src={logo} alt="" />
            <h1 className="text-xl font-semibold py-2 md:ml-10">{category_name}</h1>
            <p className="font-medium md:ml-10">{availability}</p>
          </div>

          <div className="block md:hidden items-center p-5">
         <div className="flex justify-center items-center">
         <img className="" src={logo} alt="" />
         </div>
            <h1 className="text-xl font-semibold text-center py-2">{category_name}</h1>
            <p className="font-medium text-center ">{availability}</p>
          </div>
        </div>
    );
};

export default Category;