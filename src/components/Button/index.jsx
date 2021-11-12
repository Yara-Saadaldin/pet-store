import './styles.css';

export const Button = (props) => {
    const {isDisabled, action, type, text} = props;

    return(
        <button onClick={action} disabled={isDisabled} clasName={type}>{text}</button>
    )
}