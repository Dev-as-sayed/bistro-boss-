import React from 'react';
import useManue from '../../../Hooks/useManue/useManue';
import SectionsHeader from '../../../Conponents/SectionsHeader/SectionsHeader';
import ManueItem from '../../../Conponents/ManueItem/ManueItem';

const PopularManue = () => {

    const manue = useManue();
    const popularManues = manue.filter( item => item.category === "popular")

    console.log(popularManues);
    return (
        <div>
            <SectionsHeader
                heading="Check it out"
                subHeading="FROM OUR MENU"
            ></SectionsHeader>
            <div className='mb-6 grid lg:grid-cols-2 gap-2'>
                {
                    popularManues.map( manueItem => <ManueItem
                        item={manueItem}
                    ></ManueItem>)
                }
            </div>
            <div className='w-fit mx-auto my-8'>
                <button className='btn btn-outline border-t-0 border-x-0 border-b-4 border-black hover: text-black '>View Full  Menu</button>
            </div>
            <div className='bg-slate-800 w-full mb-10'>
                <p className='font-semibold text-2xl w-fit mx-auto py-12'>Call Us: +88 018813642873</p>
            </div>
        </div>
    );
};

export default PopularManue;