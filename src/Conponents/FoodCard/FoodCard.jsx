import React from 'react';

const FoodCard = ({ food }) => {
    const {image, name, price, recipe} = food;
    return (
        <div className="card w-80 bg-base-100 m-2 rounded-none shadow-xl">
            <figure><img className='w-full' src={image} alt="Shoes" /></figure>
            <div className="card-body text-center text-slate-600 bg-slate-200 py-2">
                <h2 className="text-lg font-semibold text-center">{name}</h2>
                <p>{recipe}</p>
                <button className='btn btn-outline w-fit mx-auto border-t-0 border-x-0 border-b-4 border-black hover: text-black '>add to cart</button>
            </div>
        </div>
    );
};

export default FoodCard;