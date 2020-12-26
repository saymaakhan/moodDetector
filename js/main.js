const video = document.getElementById("video");

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
  faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
  faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
  faceapi.nets.faceExpressionNet.loadFromUri("/models"),
]).then(startVideo);

function startVideo() { //stream webcam video into video element
  navigator.getUserMedia(
    { video: {} }, //pass in empty video object 
    stream => (video.srcObject = stream),
    err => console.error(err)
  );
}



