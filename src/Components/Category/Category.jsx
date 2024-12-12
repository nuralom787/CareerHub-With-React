
const Category = ({ category }) => {
    const { id, logo, category_name, availability } = category;
    return (
        <div className="bg-gradient-to-r from-[#F9F9FF] to-[#FAF8FF] p-8 rounded-lg space-y-6 w-full">
            <img className="bg-gradient-to-r from-[#EDEEFF] to-[#EFECFF] p-3 rounded-lg" src={logo} alt="" />
            <div>
                <h3 className="font-extrabold text-xl text-[#474747]">{category_name}</h3>
                <p className="font-medium text-base text-[#A3A3A3]">{availability}</p>
            </div>
        </div>
    );
};

export default Category;