const model = await faceLandmarksDetection.load(
    faceLandmarksDetection.SupportedPackages.mediapipeFacemesh
);
const video = document.querySelector("video");
const faces = await model.estimateFaces(
    {
        input:video 
    }
);
