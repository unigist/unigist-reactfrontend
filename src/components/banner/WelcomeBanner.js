/**
 * The display, random showing the post of the day
 * With the option to create an account or reading
 * This section should display on the admin/staff post
 * concerning the app.
 */

import './WelcomeBanner.css';


const WelcomeBanner = (props) => {
    return (
        <article id="wb" className={`${props.className} carousel slide`} data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#wb" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#wb" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#wb" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner position-relative">
                <div className="carousel-item active" data-bs-interval='10000'>
                    <img src="..." className="d-block w-100 full-height" alt="..." />
                    <div className='carousel-caption'>
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                    <img src="..." className="d-block w-100 full-height" alt="..." />
                    <div className="carousel-caption">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                    <img src="..." className="d-block w-100 full-height" alt="..." />
                    <div className="carousel-caption d-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#wb" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#wb" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </article>
    )
}

export default WelcomeBanner;
