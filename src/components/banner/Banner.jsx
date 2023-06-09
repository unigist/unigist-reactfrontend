import { Link } from 'react-router-dom';
import './Banner.css';


const Banner = ({username, img}) => {
    return (
        <section className="container-fluid mb-2" id='user-banner'>
            <div className="card bg-dark opacity-50 text-white">
                <img src={img} className="card-img" alt={`${username} profile`} />
                <div className="card-img-overlay row">
                    <div className="col col-lg px-4 text-start d-flex flex-column justify-content-between">
                        <h2 className="card-title h2">
                            Hello <span> {username} </span> Any for <br/> a new blog
                        </h2>
                        <div>
                            <Link className="btn btn-primary px-4 px-sm-1" to="write-article">Create</Link>
                        </div>
                    </div>
                    <div className="d-none d-sm-block col-2  col-lg-2">
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
