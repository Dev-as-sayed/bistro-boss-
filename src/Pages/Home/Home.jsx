import AboutBB from './AoutBB/AboutBB';
import Banner from './Banner/Banner';
import ChefRrecomend from './ChefRrecomend/ChefRrecomend';
import FormManue from './FormManue/FormManue';
import OrderOnline from './OrderOnline/OrderOnline';
import PopularManue from './PopularManue/PopularManue';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className=' mx-auto'>
                <OrderOnline></OrderOnline>
                <div className='max-w-5xl mx-auto'>
                    <AboutBB></AboutBB>
                    <PopularManue></PopularManue>
                    <ChefRrecomend></ChefRrecomend>
                </div>
                <FormManue></FormManue>
                <Reviews></Reviews>
            </div>
        </div>
    );
};

export default Home;