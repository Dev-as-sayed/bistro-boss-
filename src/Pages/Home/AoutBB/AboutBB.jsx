import aboutBg from "../../../assets/home/chef-service.jpg"



const AboutBB = () => {
    return (
        <div className="hero my-12 w-full h-[25rem]" style={{backgroundImage: `url("${aboutBg}")`}}>
            <div className="hero-content w-2/3 text-slate-500 text-center  bg-white px-12 py-6">
                <div className="">
                    <h1 className=" text-5xl font-bold">Bistro Boss</h1>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutBB;