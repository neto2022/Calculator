var num1 = 0;
var num2 = 0;
var result = document.getElementById('textResult');
function calc(...params) {
    if (params == 'C') {
        let textContent = result.textContent
        console.log(textContent)
        return result.textContent = '';
    }
    var resultText = document.createTextNode(params)
    result.appendChild(resultText)
}