import Card from './Card';
import classes from './ProjectItem.module.css';
import ProjectList from './ProjectList';
//import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
//import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
//import { Button } from '@mui/material';

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'E-Plan with Dart and Firebase',
        image:
          'https://i.imgur.com/1arjnNv.jpg',
        address: 'Created during Fall 2021 of LaunchPad Purdue',
        description:
          'This app is a planner app that allows you to keep track of your progress and goals you have set. UI used with Dart is Flutter.',
      },
      {
        id: 'm1',
        title: 'E-Plan with Dart and Firebase',
        image:
          'https://i.imgur.com/1arjnNv.jpg',
        address: 'Created during Fall 2021 of LaunchPad Purdue',
        description:
          'This app is a planner app that allows you to keep track of your progress and goals you have set. UI used with Dart is Flutter.',
      },
      {
        id: 'm1',
        title: 'E-Plan with Dart and Firebase',
        image:
          'https://i.imgur.com/1arjnNv.jpg',
        address: 'Created during Fall 2021 of LaunchPad Purdue',
        description:
          'This app is a planner app that allows you to keep track of your progress and goals you have set. UI used with Dart is Flutter.',
      },
];

function PreviousProj() {
    return (
        <div>
            <center><h1>Previous projects</h1></center>
            <center><h3>Fall 2022</h3></center>
              <div className={classes.container}>
                <div className = {classes.row}>
                  <ProjectList projects={DUMMY_DATA} />
                </div>
              </div>

            <center><h3>Fall 2021</h3></center>
              <div className={classes.container}>
                <div className = {classes.row}>
                  <ProjectList projects={DUMMY_DATA} />
                </div>
              </div>
        </div>
    );
  }
  
  export default PreviousProj;