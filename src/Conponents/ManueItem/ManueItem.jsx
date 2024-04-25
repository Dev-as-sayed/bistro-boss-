import React from 'react';

const ManueItem = ({ item }) => {
    const {image, name, price, recipe} = item;
    console.log(item);
    return (
        <div className='flex p-2'>
            <div className='w-fit mr-4'>
                <img className='w-24 h-20 rounded-e-full rounded-b-full' src={image} alt="" />
            </div>
            <div className='felx flex-col'>
                <div className='w-fit'>
                    <div className='flex justify-between '>
                        <h3 className='text-xl text-gray-500'>{name}--------------</h3>
                        <p className='text-lg text-yellow-600'>$ {price}</p>
                    </div>
                    <p>{recipe}</p>
                </div>
            </div>
        </div>
    );
};

export default ManueItem;