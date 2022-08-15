import React, {useState} from 'react';
import { SliderData } from './SliderData';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { sliderClasses } from '@mui/material';

const ProjectSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

  return (
    <section class="slider">
        <ArrowBackIosNewIcon className='left-arrow' onClick={prevSlide} />
        <ArrowForwardIosIcon className='right-arrow' onClick={nextSlide} />
        
        
        {SliderData.map((slide, index) => { 
            return (
                <div> 
                    <div className={index === current ? 'slide active' : 'slide'} 
                    key={index}>
                        {index === current && (
                        <img src={slide.image} alt="project" className='image'/>)}
                    </div>
                    <center>
                        <div className={index === current ? 'slide active' : 'slide'} 
                        key={index}>
                            {index === current && (
                            <h3>{slide.title}</h3>)}
                        </div>
                    </center>
                </div>
            )
        })}
    </section>
  )
}

export default ProjectSlider
