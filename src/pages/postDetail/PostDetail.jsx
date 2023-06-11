import './PostDetail.css';

import { Link } from 'react-router-dom';

// remove this while actual post is
const eightyCharOnly = title =>  title.substr(0, 80)

const sweepIcons = (e, newClass) => {
    let el = e.target;
    let regpat = /\bbi((\S)\w*)+/;
    let newAttr = el.getAttribute('class').match(regpat);

    if (newAttr[1] === '-fill') {
        el.classList.remove(newAttr[0]);
        let newstr =newAttr[0].replace('-fill', '');
        el.classList.add(newstr);
    } else {
        el.classList.remove(newAttr[0])
        newAttr[0] = newAttr[0] + '-fill';
        el.classList.add(newAttr[0])
    }
}

const RelatedPostCard = props => (
    <>
    <li className="d-flex flex-column">
        <h4 className="p p-0 m-0 fw-normal fs-5">Toxic Work environment</h4>
        <p className='m-0 p-0'>
            {
                ['math', 'french', 'web', 'testing', 'lorem'].map((tag, idx) => (
                    <Link className='text-decoration-none text-muted px-1 m-0 py-2 rounded-2 link-dark' to={`/tags/${tag}`} key={idx}>#{tag}</Link>
                ))
            }
        </p>
    </li>
    <hr />
    </>
)


const PostDetail = () => {

    return (
        <article className="container-fluid bp" id='post-details'>
            <header className='bp__header my-5 ps-2 ps-md-5 ms-md-5'>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-2">
                        <li className="breadcrumb-item"><small>datepublised</small></li>
                        <li className="breadcrumb-item active" aria-current='page'><Link to={`topic/${'this-topic'}`}>Library</Link></li>
                    </ol>
                </nav>
                <div className='d-flex flex-column'>
                    <h1 className='h1 mb-4'>
                        {
                        eightyCharOnly("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae doloremque saepe ullam?")
                        }
                    </h1>
                    <div className='d-flex row align-items-center' style={{maxWidth: 'fit-content'}}>
                        <img className='img-thumbnail rounded-circle col-3 aa' src="" alt="author" />
                        <div className='col'>
                            <p className='fw-semibold m-0'>authors name</p>
                            <small className='m-0 text-muted'>majorRoles | location | hiring | since</small>
                        </div>
                    </div>
                </div>
            </header>
            <section className='row ps-md-5 ms-md-4 ps-2'>
                <div className="col-12 col-md-11 col-lg-7 bp__content">
                    <div className="bp__content--post">
                        <div>
                            <h3>Lorem ipsum init</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magni saepe vel reprehenderit dolorem itaque, iste exercitationem neque enim perspiciatis non soluta quaerat aspernatur, maxime cumque fugit sed quas? Debitis.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quas, possimus assumenda recusandae nisi explicabo ut, error quos quasi voluptatibus provident rerum corporis. Ea, sequi et magni dolores veritatis quasi quod quidem? Ea, nostrum!
                            </p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit magni saepe vel reprehenderit dolorem itaque, iste exercitationem neque enim perspiciatis non soluta quaerat aspernatur, maxime cumque fugit sed quas? Debitis.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quas, possimus assumenda recusandae nisi explicabo ut, error quos quasi voluptatibus provident rerum corporis. Ea, sequi et magni dolores veritatis quasi quod quidem? Ea, nostrum!
                        </p>
                        <div>
                            <h3>Lorem ipsum dolor sit.</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, repudiandae nesciunt esse consequatur iusto maiores! Mollitia qui quisquam eum laborum eaque suscipit fugiat vero excepturi magnam doloremque! Suscipit, minima eveniet ex accusantium quae at ullam facere deleniti nulla blanditiis assumenda aut quod quaerat! Qui maiores minima facilis cupiditate non ratione optio ut blanditiis totam.
                            </p>
                        </div>
                        <div>
                            <h4>Conclusion</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ea magni nam ratione repellendus cumque? Excepturi nihil illo, amet eaque omnis similique, quis quisquam quia mollitia quidem minima error autem!
                            </p>
                        </div>
                    </div>
                </div>

                {/* The Betwixt Icons */}
                <div className="col-12 col-md-1 bp__opts mt-0 mt-md-5 d-flex justify-content-end">
                    <ol className='list-unstyled mt-md-4 bp__opts--list d-flex gap-4 me-3 d-md-block'>
                        <li className='mb-4'>
                            <small onMouseEnter={sweepIcons} onMouseLeave={sweepIcons} className="bi bi-hand-thumbs-up fs-2 fw-bold"></small>
                        </li>
                        <li className='mb-4'>
                            <small onMouseOver={sweepIcons} onMouseLeave={sweepIcons} className='bi bi-bookmark fs-2 fw-bold'></small>
                        </li>
                        <li>
                            <small onMouseOver={sweepIcons} onMouseLeave={sweepIcons} className='bi bi-chat fs-2 fw-bold'></small>
                        </li>
                    </ol>
                </div>

                {/* The Right side bar */}
                <div className="col-12 order-first order-lg-0 col-lg-4 border-start mt-md-4 pt-2 bp__ar">
                    <div className="bp__ar--tags px-3">
                        <h4 className="h4 mb-3">
                            Related tags:
                        </h4>
                        <p className='d-flex flex-wrap'>
                            {
                                ['math', 'french', 'web', 'french', 'web','testing', 'english', 'lorem'].map((tag, idx) => (
                                    <Link className='text-decoration-none px-1 m-0 py-1 rounded-2 link-dark' to={`/tags/${tag}`} key={idx}>#{tag}</Link>
                                ))
                            }
                        </p>

                    </div>

                    <hr className='px-0 mx-0'/>

                    <div className='bp__ar--posts d-none d-lg-flex card bg-white m-1 p-2 px-3'>
                        <h3 className="card-title mb-4 h4">
                            More Articles from &nbsp;
                            <Link className='text-decoration-none fs-4' to={'author/{authorsname}'}>authorsname</Link>:
                        </h3>
                        <ol className='m-0 p-0'>
                            <RelatedPostCard />
                            <RelatedPostCard />
                            <RelatedPostCard />
                            <RelatedPostCard />
                        </ol>

                    </div>
                </div>
            </section>
            {/* comment section */}
            <section className="row ps-md-5 ms-md-4 ps-2">
                <div className="col-12 card mt-5 px-5 py-4 col-md-11 col-lg-7 bp__content">
                    <h4 className="h4 card-title">
                        <label htmlFor="comments">Comments</label>
                    </h4>
                    <div className="comment_list"></div>
                    <div className=" d-flex gap-2">
                        <div alt="logo" className='rounded-circle' style={{
                            width: '35px',
                            height: '35px',
                            backgroundColor: '#1b1b1c',

                        }} />
                        <div className="col-11">
                          <textarea className="form-control" name="" placeholder='Add to the disscussion' id="comments"></textarea>
                        </div>
                    </div>
                </div>
                {/* emypty */}
                <div className="col-12 col-md-1 bp__opts mt-0 mt-md-5 d-flex justify-content-end"></div>
                <div className="col-12 order-first order-lg-0 col-lg-4 border-start mt-md-4 pt-2 bp__ar"></div>
            </section>
       </article>
    )
}

export default PostDetail;
