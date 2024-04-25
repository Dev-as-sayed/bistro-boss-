
const PageBanner = ({ bgImg, heading, subHeading}) => {
    return (
        <div className="hero min-h-[80vh] bg-fixed" style={{backgroundImage:    `url("${bgImg}")`}}>
            <div className="hero-content text-center  w-9/12 text-neutral-content">
                <div className="w-full py-20 text-white bg-slate-800 bg-opacity-40">
                    <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
                    <p className="mb-5 text-xl">{subHeading}</p>
                </div>
            </div>
        </div>
    );
};

export default PageBanner;