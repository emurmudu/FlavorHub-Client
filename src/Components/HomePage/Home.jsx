import { Helmet } from "react-helmet";
import TopFoods from "../Pages/TopFoods";
import Banner from "./Banner";
import ExtraOne from "./ExtraOne";
import ExtraTwo from "./ExtraTwo";
import ClientReviews from "../Pages/ClientReviews";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>FlavorHub | Home</title>
            </Helmet>
            <Banner></Banner>
            <TopFoods></TopFoods>
            <ExtraOne></ExtraOne>
            <ExtraTwo></ExtraTwo>
            <ClientReviews />


        </div>
    );
};

export default Home;