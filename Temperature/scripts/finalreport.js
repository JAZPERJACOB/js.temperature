function convertTemperatureRange(){
    const startTemp = parseFloat(document.getElementById("startTemp").value)
    const endValue = parseFloat(document.getElementById("endTemperature").value)
    const tempScale = document.getElementById("tempScale").value;

    for (let temperature = startTemp; startTemp <= endValue; temperature++) {
        if (tempScale == "F"){
            let Celcius = (startTemp - 32) * 5/9;
    
            console.log(Celcius);
        }
    
        if (tempScale == "C"){
            let Fahrenheit = (startTemp * 9/5) + 32;
    
            console.log(Fahrenheit)
        }
        return;
        
    }
}