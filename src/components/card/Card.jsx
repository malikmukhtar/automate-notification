import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './card.css'
import { faComment, faHeart, faInfo, faShare } from '@fortawesome/free-solid-svg-icons'

const Card = ({post}) => {
    return(
        <div className="card">
                <div className="info">
                    <img src={post.userImg} alt="" className="userImg" />
                    <span>{post.fullname}</span>
                </div>
                <img src={post.postImg} alt="" className="postImg" />
                <div className="interaction">
        <FontAwesomeIcon icon={faHeart} className="cardIcon" />
        <FontAwesomeIcon icon={faComment} className="cardIcon" />
        <FontAwesomeIcon icon={faShare} className="cardIcon" />
        <FontAwesomeIcon icon={faInfo} className="cardIcon" />
                    {/* <img src={} alt="" className="cardIcon" /> */}
                </div>
        </div>
    )
}

export default Card