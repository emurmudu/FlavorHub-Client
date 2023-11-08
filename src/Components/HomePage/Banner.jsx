import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {

    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={'https://i.ibb.co/QF6Ztd3/banner7.jpg'} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center gap-5 transform left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className=' text-white pr-6 pl-6 md:pl-24 space-y-7 md:w-4/6 '>
                        <h2 className=' text-2xl md:text-6xl font-bold '>Flavors Unleashed: Elevate Your Restaurant Experience</h2>
                        <p>
                            Experience the art of culinary excellence effortlessly with our restaurant management platform. From streamlined food inventory to efficient order tracking, we empower your culinary journey, ensuring a delectable experience for both you and your patrons.
                        </p>
                        <div>
                            <Link to="/allFoods">
                                <button className="btn btn-outline btn-warning text-yellow-600">Explore Now</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-center gap-5 transform -translate-x-1/2 translate-y-1/2 bottom-5 left-1/2 top-3/4">
                    <a href="#slide4" className="btn btn-circle text-yellow-600">❮</a>
                    <a href="#slide2" className="btn btn-circle  text-yellow-600">❯</a>
                </div>

            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <img src={'https://i.ibb.co/5915KKP/banner4.jpg'} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center gap-5 transform right-0 top-0 h-full bg-gradient-to-l from-[#151515] to-[rgba(21,21,21,0.1)]">
                    <div className='text-white  pr-24 space-y-7 '>
                        <h2 className='text-6xl font-bold text-right'>Elevate Your<br /> Culinary Experience</h2>
                        <p className="text-right">
                            Welcome to a seamless restaurant management solution that empowers <br />  you to streamline operations, enhance customer experiences, <br /> and savor  the taste of success. From menu creation to order tracking, we've got your<br /> restaurant covered, ensuring a delightful journey in every bite and every click.
                        </p>
                        <div className="text-right">
                            <Link to="/allFoods">
                                <button className="btn btn-outline btn-warning text-yellow-600">Explore Now</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-center gap-5 transform -translate-x-1/2 translate-y-1/2 bottom-5 left-1/2 top-3/4">
                    <a href="#slide1" className="btn btn-circle text-yellow-600">❮</a>
                    <a href="#slide3" className="btn btn-circle  text-yellow-600">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <img src={'https://i.ibb.co/3fL1MQz/banner5.jpg'} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center gap-5 transform left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className=' text-white pr-6 pl-6 md:pl-24 space-y-7 md:w-4/6 '>
                        <h2 className=' text-2xl md:text-6xl font-bold '>Elevate Your Restaurant's Digital Presence</h2>
                        <p>
                            Experience seamless restaurant management with our comprehensive solutions. From menu customization to order tracking, we empower your culinary journey in the digital era. Let your flavors shine as we handle the rest, ensuring a delightful experience for both you and your patrons
                        </p>
                        <div>
                            <Link to="/allFoods">
                                <button className="btn btn-outline btn-warning text-yellow-600">Explore Now</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-center gap-5 transform -translate-x-1/2 translate-y-1/2 bottom-5 left-1/2 top-3/4">
                    <a href="#slide2" className="btn btn-circle text-yellow-600">❮</a>
                    <a href="#slide4" className="btn btn-circle  text-yellow-600">❯</a>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
                <img src={'https://i.ibb.co/hZ9cTqr/banner6.jpg'} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center gap-5 transform right-0 top-0 h-full bg-gradient-to-l from-[#151515] to-[rgba(21,21,21,0.1)]">
                    <div className='text-white  pr-24 space-y-7 '>
                        <h2 className='text-6xl font-bold text-right'>Savor Success with <br /> Effortless Management</h2>
                        <p className="text-right">
                            Empower your culinary journey with our comprehensive restaurant management <br /> platform. From menu creation to order fulfillment, elevate your dining experience seamlessly
                        </p>
                        <div className="text-right">
                            <Link to="/allFoods">
                                <button className="btn btn-outline btn-warning text-yellow-600">Explore Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-center gap-5 transform -translate-x-1/2 translate-y-1/2 bottom-5 left-1/2 top-3/4">
                    <a href="#slide3" className="btn btn-circle text-yellow-600">❮</a>
                    <a href="#slide1" className="btn btn-circle  text-yellow-600">❯</a>
                </div>
            </div>


        </div>
    );
};

export default Banner;