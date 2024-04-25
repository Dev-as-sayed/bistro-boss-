import sectionBg from '../../../assets/home/featured.jpg'

const FormManue = () => {
    return (
        <div className="hero min-h-[80vh] bg-fixed" style={{backgroundImage: `url("${sectionBg}")`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className='flex lg: flex-row gap-6'>
                    <img className='w-96 rounded-sm' src={sectionBg} alt="" />
                    <div className="max-w-md lg:text-left">
                        <h1 className="mb-5 text-xl font-bold">March 20, 2023 <br/> WHERE CAN I GET SOME?</h1>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='btn btn-outline w-fit mx-auto text-white border-t-0 border-x-0 border-b-4 border-black '>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormManue;