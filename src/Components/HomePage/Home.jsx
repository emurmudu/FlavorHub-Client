import { Helmet } from "react-helmet";
import TopFoods from "../Pages/TopFoods";
import Banner from "./Banner";
import ExtraOne from "./ExtraOne";
import ExtraTwo from "./ExtraTwo";

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

        </div>
    );
};

export default Home;