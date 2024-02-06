import { useState, useEffect } from "react";
import GifDisplay from "./GifDisplay";

function Button(props) {

    const [gif, setGif] = useState(null)

    // giphy api
    const apiKey = "rVcSCTfaCqTHKJ7WQjl9vUko5EZ59357"

    const url = `https://api.giphy.com/v1/gifs/random/?apikey=${apiKey}`

    // function to handle button click
    async function handleClick(event) {
        const response = await fetch(url) // get response from url
        const res = await response.json() // convert response to json

        setGif(res) // get the right link, using small_width since that is recommended in the API documentation https://developers.giphy.com/docs/api/#quick-start-guide:~:text=smaller%20fixed_height%20or%20fixed_width%20renditions%20on%20your%20preview%20grid.

    }

    // useEffect(() => {
    //     // side efffect function to run on initial page rendering only
    //     console.log('first render', gif)
    //   }, [])  // empty dependencies mean the side effect function will run only once during first page render
    

    return (
        <div>
            <button className="myButton" onClick={handleClick}>Generate GIF</button>
             <GifDisplay gif={gif}/>
        </div>
        
    )


}

export default Button