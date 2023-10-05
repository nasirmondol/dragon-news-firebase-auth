import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2 className='text-2xl font-semibold'>All Categories</h2>
            <div className="flex items-center  h-[64px] bg-[#E7E7E7] text-center justify-center mt-5">
                <h2 className="text-2xl font-semibold mt-4 mb-3 text-center">National News</h2>
            </div>
            <div className="">
                {
                    categories?.map(category => <Link className="block py-2 text-xl fon-bold text-black" key={category.id}>{category.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;