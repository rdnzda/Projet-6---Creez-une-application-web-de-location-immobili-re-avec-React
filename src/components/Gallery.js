import { Card } from "./Card";
import logements from '../data/logements.js'

export const Gallery = () => {
    console.log(logements)
    return (
        <section id="gallery">
            {logements.map((logement) => (<Card key={logement.id} data={logement}/>))}     
        </section>
    );
}