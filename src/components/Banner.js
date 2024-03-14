export const Banner = ({imgUrl, h1}) => {
    return (
        <section className="banner">
            <img alt="banner" src={imgUrl}></img>
            <div></div>
            <h1>{h1}</h1>
        </section>
    );
}