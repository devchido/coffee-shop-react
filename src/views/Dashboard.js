import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBars, faEnvelope, faMugHot, faPhone, faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';
import Swiper from 'swiper';
import 'swiper/css';
import { useEffect } from 'react';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Dashboard = () => {
    useEffect(() => {
        const mySwiper = new Swiper('.review-slider', {
            // Cấu hình Swiper tại đây
            spaceBetween: 20,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            loop: true,
            grabCursor: true,
            autoplay: {
                delay: 7500,
                disableOnInteraction: false,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
            },
        });
    }, []); // Đảm bảo useEffect chỉ chạy một lần sau khi component được render
    return (
        <>
            {/*header*/}
            <header>
                <a href="#" id="menu-btn">
                    <FontAwesomeIcon icon={faBars} />

                </a>
                <div className="logo">
                    <span>
                        Coffee
                        <FontAwesomeIcon icon={faMugHot} />
                        Hut
                    </span>
                </div>
                <nav className="navbar">
                    <a href="#home">home</a>
                    <a href="#about">about</a>
                    <a href="#menu">menu</a>
                    <a href="#review">review</a>
                    <a href="#book">order</a>
                </nav>
                <a href="#book" className="btn">
                    Book a table
                </a>
            </header>
            {/*home section*/}
            <section className="home" id="home">
                <div className="row">
                    <div className="content">
                        <h3>Fresh coffee in the morning</h3>
                        <a href="#" className="btn">
                            Buy one now
                        </a>
                    </div>
                    <div className="img">
                        <img src={process.env.PUBLIC_URL + "/assets/images/home-img-1.png"} className="main-home-image" />
                    </div>
                </div>
                <div className="image-slider">
                    <img src={process.env.PUBLIC_URL + "/assets/images/home-img-1.png"} alt="" />
                    <img src={process.env.PUBLIC_URL + "/assets/images/home-img-3.png"} alt="" />
                    <img src={process.env.PUBLIC_URL + "/assets/images/home-img-2.png"} alt="" />
                </div>
            </section>
            {/*about section starts*/}
            <section className="about" id="about">
                <h1 className="heading">
                    About us <br />
                    <span>why to choose us</span>
                </h1>
                <div className="row">
                    <div className="image">
                        <img src={process.env.PUBLIC_URL + "/assets/images/about-img.png"} alt="" />
                    </div>
                    <div className="content">
                        <h3 className="title">What makes our coffee special</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem error
                            minus distinctio cupiditate deserunt sunt molestias doloribus tempora
                            quia? Id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                            error minus distinctio cupiditate deserunt sunt molestias doloribus
                            tempora quia? Id. Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Rem error minus distinctio cupiditate deserunt sunt molestias
                            doloribus tempora quia? Id.
                        </p>
                        <a href="#" className="btn">
                            Read more
                        </a>
                        <div className="icons-container">
                            <div className="icons">
                                <img src={process.env.PUBLIC_URL + "/assets/images/about-icon-1.png"} alt="" />
                                <h3>Quality coffee</h3>
                            </div>
                            <div className="icons">
                                <img src={process.env.PUBLIC_URL + "/assets/images/about-icon-2.png"} alt="" />
                                <h3>our branches</h3>
                            </div>
                            <div className="icons">
                                <img src={process.env.PUBLIC_URL + "/assets/images/about-icon-3.png"} alt="" />
                                <h3>free delivery</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*menu section starts*/}
            <section className="menu" id="menu">
                <h1 className="heading">
                    Our Menu
                    <br />
                    <span>Popular menu</span>
                </h1>
                <div className="box-container">
                    <a href="#" className="box">
                        <img src={process.env.PUBLIC_URL + "/assets/images/menu-1.png"} alt="" />
                        <div className="content">
                            <h3>our special coffee</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                                aliquid qui.
                            </p>
                            <span>$8.99</span>
                        </div>
                    </a>
                    <a href="#" className="box">
                        <img src={process.env.PUBLIC_URL + "/assets/images/menu-2.png"} alt="" />
                        <div className="content">
                            <h3>our special coffee</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                                aliquid qui.
                            </p>
                            <span>$8.99</span>
                        </div>
                    </a>
                    <a href="#" className="box">
                        <img src={process.env.PUBLIC_URL + "/assets/images/menu-6.png"} alt="" />
                        <div className="content">
                            <h3>our special coffee</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                                aliquid qui.
                            </p>
                            <span>$8.99</span>
                        </div>
                    </a>
                    <a href="#" className="box">
                        <img src={process.env.PUBLIC_URL + "/assets/images/menu-3.png"} alt="" />
                        <div className="content">
                            <h3>our special coffee</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                                aliquid qui.
                            </p>
                            <span>$8.99</span>
                        </div>
                    </a>
                    <a href="#" className="box">
                        <img src={process.env.PUBLIC_URL + "/assets/images/menu-5.png"} alt="" />
                        <div className="content">
                            <h3>our special coffee</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                                aliquid qui.
                            </p>
                            <span>$8.99</span>
                        </div>
                    </a>
                    <a href="#" className="box">
                        <img src={process.env.PUBLIC_URL + "/assets/images/menu-4.png"} alt="" />
                        <div className="content">
                            <h3>our special coffee</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                                aliquid qui.
                            </p>
                            <span>$8.99</span>
                        </div>
                    </a>
                </div>
            </section>
            {/*review section*/}
            <section className="review" id="review">
                <h1 className="heading">
                    Reviews
                    <br />
                    <span>What people says</span>
                </h1>
                <div className="swiper review-slider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide box">
                            <FontAwesomeIcon icon={faQuoteLeft} />
                            <FontAwesomeIcon icon={faQuoteRight} />
                            <img src={process.env.PUBLIC_URL + "/assets/images/pic-1.png"} alt="" />
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                                aliquid eveniet qui, similique aut sit.
                            </p>
                            <h3>Darshan Raval</h3>
                            <span>satisfied client</span>
                        </div>
                        <div className="swiper-slide box">
                            <FontAwesomeIcon icon={faQuoteLeft} />
                            <FontAwesomeIcon icon={faQuoteRight} />
                            <img src={process.env.PUBLIC_URL + "/assets/images/pic-3.png"} alt="" />
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                                aliquid eveniet qui, similique aut sit.
                            </p>
                            <h3>Harry potter</h3>
                            <span>satisfied client</span>
                        </div>
                        <div className="swiper-slide box">
                            <FontAwesomeIcon icon={faQuoteLeft} />
                            <FontAwesomeIcon icon={faQuoteRight} />
                            <img src={process.env.PUBLIC_URL + "/assets/images/pic-2.png"} alt="" />
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                                aliquid eveniet qui, similique aut sit.
                            </p>
                            <h3>Hermione granger</h3>
                            <span>satisfied client</span>
                        </div>
                        <div className="swiper-slide box">
                            <FontAwesomeIcon icon={faQuoteLeft} />
                            <FontAwesomeIcon icon={faQuoteRight} />
                            <img src={process.env.PUBLIC_URL + "/assets/images/pic-4.png"} alt="" />
                            <div className="stars">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                                aliquid eveniet qui, similique aut sit.
                            </p>
                            <h3>ginny weasley</h3>
                            <span>satisfied client</span>
                        </div>
                    </div>
                    <div className="swiper-pagination" />
                </div>
            </section>
            {/*book section*/}
            <section className="book" id="book">
                <h1 className="heading">
                    Bookings <br />
                    <span>Reserve a table</span>
                </h1>
                <form action="">
                    <input type="text" placeholder="Name" className="box" />
                    <input type="email" placeholder="Email" className="box" />
                    <input type="number" placeholder="Mobile Number" className="box" />
                    <textarea
                        name=""
                        placeholder="Your Order"
                        cols={30}
                        rows={7}
                        className="box"
                        defaultValue={""}
                    />
                    <input type="submit" defaultValue="Send Message" className="btn" />
                </form>
            </section>
            {/*footer section*/}
            <section className="footer">
                <div className="box-container">
                    <div className="box">
                        <h3>our branches</h3>
                        <a href="#">
                            {" "}
                            <FontAwesomeIcon icon={faArrowRight} /> satara{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <FontAwesomeIcon icon={faArrowRight} /> islampur{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <FontAwesomeIcon icon={faArrowRight} /> sangali{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <FontAwesomeIcon icon={faArrowRight} /> pune{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <FontAwesomeIcon icon={faArrowRight} /> kolhapur{" "}
                        </a>
                    </div>
                    <div className="box">
                        <h3>quick links</h3>
                        <a href="#">
                            {" "}
                            <FontAwesomeIcon icon={faArrowRight} /> home{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <FontAwesomeIcon icon={faArrowRight} /> about{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <FontAwesomeIcon icon={faArrowRight} /> menu{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <FontAwesomeIcon icon={faArrowRight} /> review{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <FontAwesomeIcon icon={faArrowRight} /> book{" "}
                        </a>
                    </div>
                    <div className="box">
                        <h3>contact info</h3>
                        <a href="#">
                            {" "}
                            <FontAwesomeIcon icon={faPhone} /> +123-456-7890{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <FontAwesomeIcon icon={faPhone} /> +111-222-3333{" "}
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faEnvelope} /> nguyendaitu1610@gmail.com
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faEnvelope} /> Viet Nam
                        </a>
                    </div>
                    <div className="box">
                        <h3>contact info</h3>
                        <a href="#">
                            {" "}
                            <FontAwesomeIcon icon={faFacebook} /> facebook{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <FontAwesomeIcon icon={faTwitter} /> twitter{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <FontAwesomeIcon icon={faInstagram} /> instagram{" "}
                        </a>
                        <a href="#">
                            {" "}
                            <FontAwesomeIcon icon={faLinkedin} /> linkedin{" "}
                        </a>
                    </div>
                </div>
                <div className="credit">
                    <span>
                        Coffee
                        <FontAwesomeIcon icon={faMugHot} />
                        Hut
                    </span>{" "}
                    | all rights reserved
                </div>
            </section>
            {/* footer section ends */}
        </>

    )
}

export default Dashboard
