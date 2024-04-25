import ManueItem from "../../../Conponents/ManueItem/ManueItem";
import SectionsHeader from "../../../Conponents/SectionsHeader/SectionsHeader";
import useManue from "../../../Hooks/useManue/useManue";

const TodayOffer = () => {

    const manue = useManue();
    const offered = manue.filter( items => items.category === "offered")
    console.log(offered);

    return (
        <div className="p-20">
            <SectionsHeader
                heading="Don't miss"
                subHeading="TODAY'S OFFER"
            ></SectionsHeader>
            <div className='mb-6 grid lg:grid-cols-2 gap-2'>
                {
                    offered.map( item => <ManueItem
                        item={item}
                    ></ManueItem>)
                }
            </div>
            <div className='w-fit mx-auto mt-8'>
                <button className='btn btn-outline border-t-0 border-x-0 border-b-4 border-black hover: text-black '>View Full  Menu</button>
            </div>
        </div>
    );
};

export default TodayOffer;