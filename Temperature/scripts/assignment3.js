function convertTemperature(start, scale){
    // const temperatureInput = document.getElementById('temperature');
    // const scaleSelect = document.getElementById('scale');
    // const resultDiv = document.getElementById('result');

    // const temp = parseFloat(temperatureInput.value);
    // const conversion = scaleSelect.value;

    if (scale == "F"){
        let Celcius = (start - 32) * 5/9;

        console.log(Celcius);
    }

    if (scale == "C"){
        let Fahrenheit = (start * 9/5) + 32;

        console.log(Fahrenheit)
    }
}

convertTemperature(212, "F");