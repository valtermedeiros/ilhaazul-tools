function getDataUrl(imgUrl) {

    let img = new Image();
    
    //img.crossOrigin = "anonymous";
    img.src = imgUrl;



    // Create canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    // Set width and height
    canvas.width = img.width;
    canvas.height = img.height;
    // Draw the image
    ctx.drawImage(img, 0, 0);

    document.body.innerHTML("canvas: "+canvas)

    //return canvas.toDataURL('image/jpeg');
 }