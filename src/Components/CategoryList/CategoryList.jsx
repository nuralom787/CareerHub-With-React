import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);


    return (
        <div className="max-w-6xl mx-auto mt-20">
            <div className="text-center my-10 space-y-4">
                <h1 className="font-extrabold text-5xl text-[#1A1919]">Job Category List</h1>
                <p className="font-medium text-base text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                {
                    categories.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;