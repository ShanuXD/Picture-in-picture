const videoElement = document.getElementById('video')
const button = document.getElementById('button')

//prompt the selet media stream, pass to video element, then play

async function selectMediaStream(){

    const mediaStream = await navigator.mediaDevices.getDisplayMedia()
    videoElement.srcObject = mediaStream
    videoElement.onloadeddata = ()=>{
        videoElement.play()
    }
    try{

    }catch(err){
        console.log("opps ",err)
    }

}

button.addEventListener('click', async ()=>{

    button.disabled = true
    await videoElement.requestPictureInPicture()
    button.disabled = false



})


selectMediaStream()
