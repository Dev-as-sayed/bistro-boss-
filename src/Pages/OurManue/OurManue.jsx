import PageBanner from "../../Conponents/PageBanner/PageBanner";
import manueBanerBg from "../../assets/home/banner3.jpg"
import TodayOffer from "./TodayOffer/TodayOffer";

const OurManue = () => {
    return (
        <div>
            <PageBanner
                bgImg={manueBanerBg}
                heading="OUR MENU"
                subHeading="Would you like to try a dish?"
            ></PageBanner>
            <div>
                <TodayOffer></TodayOffer>
            </div>
        </div>
    );
};

export default OurManue;