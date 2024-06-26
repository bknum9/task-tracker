const Button = ({color, text, onClick }) => {

    return (
        <div>
            <button onClick={onClick}
            className="btn">{text}</button>
        </div>
    )
}

export default Button