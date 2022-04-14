import React,{useState} from "react";
import { Navigation } from "swiper";
import {Swiper,SwiperSlide} from "swiper/react/swiper-react.js";

import slideImg from '../../img/slide-img.png'
import slideLogo from '../../img/slider-logo.png'

import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss';

function Slider () {

    const[slider,setSlider] = useState([
        {"id":1,"title":"Stan Smith,Forever!","img":'../../img/slide-img.png',},
        {"id":2,"title":"Stan Smith,Forever!","img":'../../img/slide-img.png',},
        {"id":3,"title":"Stan Smith,Forever!","img":'../../img/slide-img.png',},
    ]) 
    return (
        <div className="container">
            <Swiper className="slider">
                {slider.map((s) => 
                    <SwiperSlide className="slider__row" 
                    key={s.id}
                    modules={[Navigation]}
                    navigation
                    >
                       <div className="slider__column">
                           <img src={slideLogo} alt="" className="slider__logo" />
                           <div className="slider__content">
                           <h2 className="slider__title">
                               {s.title}
                           </h2>
                           <a href="#" className="slider__link">Купить</a>
                           </div>

                       </div>
                       <div className="slider__column">
                           <img src={slideImg} alt="" />
                       </div>
                   </SwiperSlide>
                )}
             

            </Swiper>
        </div>

    )
}
export default Slider;