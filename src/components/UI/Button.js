import style from './Button.module.css'

function Button(props) {
  return <button className={style.button} {...props}></button>
}

export default Button
