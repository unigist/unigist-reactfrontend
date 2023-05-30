import { Link } from 'react-router-dom';
import './PostCard.css';


const PostCard = ({blog}) => {

    let blogSlug = 'nigga'

    return (
        <Link to={`/blog/${blogSlug}`} className="card bg-dark text-decoration-none text-white m-4" id='post-card'>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                {/* <div className="card-body">
                    < href="/" className="card-link">Card link</>
                    <a href="/" className="card-link">Another link</a>
                </div> */}
        </Link>

    )
}

export default PostCard;
