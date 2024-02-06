async function test() {
    const response = await fetch("https://api.giphy.com/v1/gifs/random/?apikey=rVcSCTfaCqTHKJ7WQjl9vUko5EZ59357")

    const data = await response.json()

    console.log(data.data.images.fixed_width.url)
}

test()