var result = document.getElementById('textResult');
function UI(param1) {
    if (param1 == 'C') {
        return result.textContent = '';
    }
    let num1 = +param1;
    console.log(num1, '1')
    var resultText = document.createTextNode(param1);
    result.appendChild(resultText);
}

function operators(params) {
    let restult1 = JSON.stringify(result.textContent).replace(/['"]+/g, '');
    const a = restult1.split("");
    console.log(typeof(restult1),restult1,a)
    if (params == 'C') {
        return result.textContent = '';
    }

    if (restult1[1] == 'x') {
        console.log('ssss')
        // return result.textContent = num2 * num1;
    }
}