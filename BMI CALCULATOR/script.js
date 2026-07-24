const height = document.getElementById('height');
const weight = document.getElementById('weight');
const button = document.getElementById('button');
const result = document.getElementById('resultval');

button.addEventListener('click', function () {
    const H = parseInt(height.value);
    const W = parseInt(weight.value);

        if (isNaN(H) || isNaN(W)) {
            result.innerHTML = ` Plese enter a number`
        }else {

    const BMI =  (W / (H * H /10000)).toFixed(1);

    result.innerHTML = `your bmi is ${BMI}`
        

    if ( BMI < 20 ) {
        result.innerHTML = `your bmi is ${BMI} - underweight`
    } else if ( BMI > 30) {
        result.innerHTML = `your bmi is ${BMI} - overweight`
    }  else {
          result.innerHTML = `your bmi is ${BMI}`
    }

        }
})