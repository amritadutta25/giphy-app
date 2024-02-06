import Button from "./Button"

function GifDisplay({gif}) {

      if (gif === null) {
        return (
            <h2>Click the button to generate a GIF</h2>
        )
      }


    return (
        <div className="gif-info">
             <h4 className="gif-title">{gif.data.title}</h4>
             <img src={gif.data.images.original.url}/>
        </div>
    )
}

export default GifDisplay