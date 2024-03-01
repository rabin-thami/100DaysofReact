
const Box = (props) => {
    const styless =  {
        backgroundColor : props.on ? props.color : "transparent"
    }
    return (
        <button
            style={styless}
            on = {props.on}
            color = {props.color}
            onClick={props.handelClick}
        ></button>
    )
}

export default Box