



export default function img2url(image) {
    url = "https://api.imgbb.com/1/upload?expiration=600&key=a77b64a87d25b114ca4751b280fea3a1"
    fetch(url, {
        method: 'POST',
        body: {
            image: image
        }
    }
    
}
