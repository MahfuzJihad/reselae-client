import React from 'react';
import img2 from '../../assests/images/house-service.jpg';
import img3 from '../../assests/images/house-clean.jpg';
import img4 from '../../assests/images/car-clean.jpg';
import img5 from '../../assests/images/homerepair.jpg';

const Banner = () => {



    return (
        <div className="carousel w-full mt-10">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img2} alt="" className="w-full rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img3} alt="" className="w-full rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full rounded-xl">
                <img src={img4} alt="" className="w-full rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img5} alt="" className="w-full  rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;