import { Banner } from "./Banner";
import Collapse from "./Collapse";
import collapses from '../data/collapses.js'
import banner from '../img/Banner2.png'

export const About = () => {
    return (
        <div id="about">
            <Banner imgUrl={banner} h1='' />
            <div className="collapses">
                {collapses.map((collapse) => (<Collapse title={collapse.title} content=<p>{collapse.content}</p>/>))}
            </div>
        </div>
    );
}