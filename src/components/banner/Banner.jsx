import { Link } from 'react-router-dom';
import './Banner.css';


const Banner = ({username, img}) => {
    return (
        <section className="container" id='user-banner'>
            <div className="card bg-dark opacity-50 text-white">
                <img src={img} className="card-img" alt={`${username} profile`} />
                <div className="card-img-overlay row">
                    <div className="col px-4 text-start d-flex flex-column justify-content-between">
                        <h2 className="card-title h2">
                            Hello <span> {username} </span> Any for <br/> a new blog
                        </h2>
                        <Link className="btn btn-primary w-25" to="write-article">Create</Link>
                    </div>
                    <div className="col-2">
                        <Link to="write-article" className="btn bg-primary rounded-circle">
                            <i className="bi bi-plus text-white display-6 fw-bold"></i>
                        </Link>
                    </div>
                </div>
            </div>

       </section>
    )
}

export default Banner;
