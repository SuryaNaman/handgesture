Webcam.set({
    width: 350,
    height: 300,
    image_format: "jpg",
    jpg_quality: 90
})

var camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snap() {
    Webcam.snap(function(data_url) {
        document.getElementById("Result").innerHTML = '<img id="captured_image" src="' + data_url + '"/>';
    });
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/jW_gQpFwp/model.json", modelLoaded);

function modelLoaded() {
    console.log("model loaded");
}

prediction_1 = "";

function speech() {
    var synth = window.speechSynthesis;
    data1 = "The First Prediction Is " + prediction_1;
    var utterthis = new SpeechSynthesisUtterance(data1);
    synth.speek(utterthis);
}