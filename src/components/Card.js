export default function Card (props) {

    let badgeText;
    if (props.entry.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.entry.location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <div className="card">
            {badgeText !== undefined && <span className="card--badge">{badgeText}</span>}
            <img src={`./images/${props.entry.coverImg}`} className="card--image" alt="card"/>
            <div className="card--stats">
                <img src="./images/star.png" className="card--star" alt="star" />
                <span>{props.entry.stats.rating}</span>
                <span className="gray">({props.entry.stats.reviewCount}) • </span>
                <span className="gray">{props.entry.location}</span>
            </div>
            <p>{props.entry.title}</p>
            <p><span className="bold">From ${props.entry.price}</span> / person</p>
        </div>
    )
}