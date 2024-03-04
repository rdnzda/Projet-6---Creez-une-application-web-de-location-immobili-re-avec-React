import { Link } from 'react-router-dom';

export const Card = ({ data }) => {
    const backgroundImageStyle = {
        backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(10, 10, 10, 0) 42%, rgba(4, 4, 4, 0.205) 99.99%, rgba(0, 0, 0, 0.5) 100%), url(${data.cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <Link to={`/${data.id}`}>
            <div className="card" key={data.id} style={backgroundImageStyle}>
                <h2>{data.title}</h2>
            </div>
        </Link>
    );
}