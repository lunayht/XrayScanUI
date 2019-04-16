var jsonData = {
    detection: []
};

export let onGeneratedData = (data) => {
    jsonData.detection.push(data);
    // console.log(jsonData.detection);
}

export let getDetectionData = () => {
    var object = jsonData.detection[0]
    // console.log(object);
    return object
}

export let deleteEntry = () => {
    jsonData.detection.shift();
    console.log(jsonData.detection.length);
    if (jsonData.detection.length == 0) {
        return false
    }
    return true
}