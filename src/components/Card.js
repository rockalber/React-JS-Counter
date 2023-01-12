import style from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={style.div}>{props.children} </div>
  );
};

export default Card;
