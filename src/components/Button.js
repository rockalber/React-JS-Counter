import style from './Button.module.css';

const Button = (props) =>{
    return(
        <div>
           <button className={style.button} onClick={props.Handler}>{props.children}</button>
        </div>  
    )
}

export default Button;