const image=document.querySelector("img")

image.addEventListener('mousemove', function(dets){
    const rotx=58-dets.x/10;
    const roty=Math.abs(rotx)
    image.style.transform=`rotateX(${rotx}deg)  rotateY(${-roty}deg)`
    
})
image.addEventListener('mouseleave', function(dets){
    setTimeout(() => {
        const rotx=58-dets.x/10;
        const roty=Math.abs(rotx)
        image.style.transform=`rotateX(0)  rotateY(0)`  
    }, 500);

    
})