import StarFilled from '../img/star-filled.svg';
import StarUnfilled from '../img/star-unfilled.svg';

export const HostRating = ({rating, hostName, hostProfilePicture}) => {
    const ratingValue = parseInt(rating);

    const stars = Array.from({ length: 5 }, (_, index) => (
        index < ratingValue ? (
            <img key={index} src={StarFilled} alt={`star-filled-${index}`} />
        ) : (
            <img key={index} src={StarUnfilled} alt={`star-outline-${index}`} />
        )
    ));


    return (
        <div className='host-rating'>
            <div className="rating">{stars}</div>
            <div className="host">
                <h2>{hostName}</h2>
                <img src={hostProfilePicture}></img>
            </div>
        </div>
    );
};