import './Slider.css';
import ProjectSlider from './ProjectSlider';
import { SliderData } from './SliderData';



function PreviousProj() {

    return (
    <><div>
      <center>
        <h1>Previous Projects</h1>
      </center>
      <center>
        <h3>Fall 2021</h3>
      </center>
      </div><ProjectSlider slides={SliderData} /></>
    )

  }
  
  export default PreviousProj;