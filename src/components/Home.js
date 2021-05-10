export function Home(props){

    const handleClick = (event) => {
        props.history.push('/about')
    }
    return(
        <div>
            <button onClick={handleClick}>Go To About</button>
        </div>
    )
}

