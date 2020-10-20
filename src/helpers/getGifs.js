export const getGif = async( category ) => {
        
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=5efB7K5m2PnDHmOzA89CgA02nMtVV5xQ`);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url

        }
        
    })




    console.log(gifs);
    return gifs;
    
}