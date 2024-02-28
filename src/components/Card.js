import { Link } from 'react-router-dom';

export const Card = ({ data }) => {
    return (
        <div className="card" key={data.id}>
            <Link to={`/${data.id}`}>
                <img src={data.cover} alt={data.title}></img>
                <h2>{data.title}</h2>
            </Link>
        </div>
    );
}