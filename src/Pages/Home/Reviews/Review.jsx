import { SwiperSlide } from 'swiper/react';

const Review = ( { reviewData } ) => {
    console.log(reviewData);
    return (
        <div>
                 <h1>{reviewData.name}</h1>

        </div>
    );
};

export default Review;