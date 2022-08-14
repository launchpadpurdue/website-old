import classes from './Card.module.css';

function Card(props) {
  //children prop allows us to use wrapper without content
  //disappearing
  return <div className={classes.card}>
    {props.children}
    </div>;
}

export default Card;