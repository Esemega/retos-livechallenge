import './Button.css';

export const Button = ({text, callBack}) => {
    return(
        <button onClick={callBack}>
            {text}
        </button>
    )
}