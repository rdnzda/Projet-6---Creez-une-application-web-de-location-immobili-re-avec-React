import { Banner } from "./Banner";
import { Gallery } from "./Gallery";
import banner from "../img/Banner.png"

export const Home = () => {
    return (
        <div id="home">
            <Banner imgUrl={banner} h1="Chez vous, et partout ailleurs"/>
            <Gallery />
        </div>
    );
}