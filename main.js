function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/60Jk7tra3/', modelReady);
}

function modelready(){
    classifier.classify(gotResults);
}