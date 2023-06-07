import { Link } from 'react-router-dom';
import './PostCard.css';


const PostCard = (props) => {
    const { title, tags, body } = props.article;

    let blogSlug = 'nigga'

    return (
        <Link to={`/blog/${blogSlug}`} className="card m-3 text-decoration-none text-dark row" id='post-card'>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body text-start">
                        <h5 className="card-title flex-start text-start">{title}</h5>
                        <p className="card-text text__text--fixwidth">{body}</p>
                        <div className="p-0 d-flex align-items-center text-muted justify-content-between">
                            <p className="card-text m-0">
                                <small className="date-published"> date | </small>
                                <small className="text-muted">Last updated 3 mins ago</small> |
                                <small className="catergory"> { tags[0] }</small>
                            </p>
                            <p className="cart-text fs-5 m-0 d-flex align-items-center">
                                {/* <button type="button" class="btn btn-primary position-relative"> */}
                                <small className="bi bi-hand-thumbs-up small mx-1"></small>
                                    {/* <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {reactions}
                                        <span class="visually-hidden">unread messages</span>
                                    </span> */}
                                {/* </button> */} |
                                <small className="bookmark ms-1">
                                    <i className="bi bi-bookmark-plus"></i>
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </Link>


    )
}

export default PostCard;
