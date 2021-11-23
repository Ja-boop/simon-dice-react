const CuadroColor = (props) => {
    return (
        <div className={`color-cuadro ${props.color} ${props.flash ? "flash" : ""}`} onClick={props.onClick} />
    )
}

export default CuadroColor;
