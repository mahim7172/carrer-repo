import { useEffect, useState } from "react";
import Category from "./Category";


const Categorylist = () => {
    const [category, setCategory]=useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategory(data))

    },[])
    console.log(category)
    return (
        <div className="my-10">
            <div className="text-center ">
                <h1 className="text-4xl font-bold text-center">Job Category List</h1>
                <p>
                    Explore thousands of job opportunities
                    with all the information you
                    need. Its your future
                </p>
            </div>
           <div className="grid md:grid-cols-4 mt-8 mx-5  gap-5">
           {
                category?.map(cate=><Category key={cate.id} cate={cate}></Category>)
            }
           </div>
        </div>
    );
};

export default Categorylist;