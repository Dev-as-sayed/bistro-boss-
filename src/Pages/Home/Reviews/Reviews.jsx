import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import useAxios from "../../../Hooks/useAxios/useAxios";
import Review from "./Review";
import SectionsHeader from "../../../Conponents/SectionsHeader/SectionsHeader";

const Reviews = () => {
    const [reviws, setReviews] = useState([]);
    const axiosSecure = useAxios();
    const url = '/getReviews';
    useEffect( ()=> {
        axiosSecure.get(url)
            .then(res => setReviews(res.data))
    },[axiosSecure, url])
    return (
        <div>
            <SectionsHeader
                heading="What Our Clients Say"
                subHeading="TESTIMONIALS"
            ></SectionsHeader>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <div>
                    {
                        reviws.map( singleReview => 
                            <SwiperSlide>
                                <Review
                                    key={singleReview._id}
                                    reviewData={singleReview}
                                ></Review>
                            </SwiperSlide>
                        )
                    }
                </div>
            </Swiper>
        </div>
    );
};

export default Reviews;