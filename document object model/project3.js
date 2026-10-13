const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = (document.querySelector("#results"))
    // if(height === ''|| height < 0 || isNaN(height)){
    //     results.innerHTML = `please give a valid height ${height}`;
    // }

    if (isNaN(height) || height <= 0) {
        results.innerHTML = "Please give a valid height";
        return;
    }
    if (isNaN(weight) || weight <= 0) {
        results.innerHTML = "Please give a valid weight";
        return;
    } else{
       const bmi =  (weight / ((height * height) / 10000)).toFixed(2);
       //show result
       results.innerHTML = `<span>${bmi}</span>`
    }

});