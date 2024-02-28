import { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Carrousel } from "./Carrousel";
import logements from '../data'
import { Tags } from "./Tags";
import { HostRating } from "./HostRating";
import Collapse from "./Collapse";

export const HouseCard = () => {
    const { logementId } = useParams();
    const navigate = useNavigate();
    const logement = logements.find((logement)=> logement.id === logementId);

    useEffect(() => {
        if (!logement) {
            navigate('/erreur');
        }
    }, [logement, navigate]);

    if (!logement) {
        return null;
    }

    const { title, pictures, description, tags, equipments, location, rating } = logement;
    console.log(pictures[1]);
    return (
        <section className="house-card">
            <Carrousel images={pictures} title={title}/>
            <div className="house-card-content">
                <div>
                    <h1>{title}</h1>
                    <h2>{location}</h2>
                    <Tags tags={tags}/>
                </div>
                <HostRating rating={rating} hostName={logement.host.name} hostProfilePicture={logement.host.picture}/>
            </div>                
            <div className="collapses">
                <Collapse title='Description' content={<p>{description}</p>}></Collapse>
                <Collapse title='Équipments' content={
                    <ul>
                    {equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}
                    </ul>
                }></Collapse>
            </div>
        </section>
    )
}
