

export function Button( props ){

    return(
        <button
            className={"button"} style={{background: props.background ? props.background : "#0096b0"}}
            onClick={props.event}
        >{props.text}</button>
    )
}