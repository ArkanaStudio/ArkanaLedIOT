const endpoint = "http://192.168.100.138";

function getDapurLed() {
    fetch(endpoint + "/dapur", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if(result== "ON") {
            ledDapur.style.backgroundColor = "red";
            dapurLedImage.src = "./assets/light-bulb (1).png";
        } else {
            ledDapur.style.backgroundColor = "#579fff";
            dapurLedImage.src = "./assets/light-bulb.png";
        }
    });
}

function getTamuLed() {
    fetch(endpoint + "/tamu", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if(result== "ON") {
            ledTamu.style.backgroundColor = "red";
            tamuLedImage.src = "./assets/light-bulb (1).png";
        } else {
            ledTamu.style.backgroundColor = "#579fff";
            tamuLedImage.src = "./assets/light-bulb.png";
        }
    });
}

function getMakanLed() {
    fetch(endpoint + "/makan", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if(result== "ON") {
            ledMakan.style.backgroundColor = "red";
            makanLedImage.src = "./assets/light-bulb (1).png";
        } else {
            ledMakan.style.backgroundColor = "#579fff";
            makanLedImage.src = "./assets/light-bulb.png";
        }
    });
}

function getDapurLed() {
    fetch(endpoint + "/dapur", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if(result== "ON") {
            ledDapur.style.backgroundColor = "red";
            dapurLedImage.src = "./assets/light-bulb (1).png";
        } else {
            ledDapur.style.backgroundColor = "#579fff";
            dapurLedImage.src = "./assets/light-bulb.png";
        }
    });
}

function setDapurLed() {
    fetch(endpoint + "/dapur", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}
function setTamuLed() {
    fetch(endpoint + "/tamu", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}
function setMakanLed() {
    fetch(endpoint + "/makan", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}
function setToiletLed() {
    // ledToilet.style.background = "red";
    // toiletLedImage.src = "./assets/light-bulb (1).png";
}

getDapurLed();
getTamuLed();
getMakanLed();