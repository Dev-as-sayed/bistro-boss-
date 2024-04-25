import FoodCard from "../../../Conponents/FoodCard/FoodCard";
import SectionsHeader from "../../../Conponents/SectionsHeader/SectionsHeader";
import useManue from "../../../Hooks/useManue/useManue";

const ChefRrecomend = () => {

    const manue = useManue()

    const chefRecomend = manue.filter( item => item.category === "salad").slice(0, 3);
    console.log(chefRecomend);
    return (
        <div>
            <SectionsHeader
                heading="Should Try"
                subHeading="CHEF RECOMMENDS"
            ></SectionsHeader>
            <div className=" w-fit mx-auto grid gap-x-2 mb-20 lg:grid-cols-3 ">
                {
                    chefRecomend.map( food => <FoodCard
                        key={food._id}
                        food={food}
                    ></FoodCard>)
                }
            </div>
        </div>
    );
};

export default ChefRrecomend;