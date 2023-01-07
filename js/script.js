var result = document.getElementById('textResult');
var element = document.querySelectorAll('button');

element.forEach(element => {
    element.addEventListener('click', e => {
        var resultE = e.target.dataset.value;
        var splited;

        if (resultE == '=') {
            if (result.innerText.includes('x')) {
                splited = result.innerText.split('x');
                splited[2] = 'x'
            } else if (result.innerText.includes('/')) {
                splited = result.innerText.split('/');
                splited[2] = '/'
            } else if (result.innerText.includes('+')) {
                splited = result.innerText.split('+');
                splited[2] = '+'
            } else if (result.innerText.includes('-')) {
                splited = result.innerText.split('-');
                splited[2] = '-'
            }
            operators(splited[0], splited[2], splited[1]);
        }
        if (resultE !== '=') {
            result.innerText += resultE;
        }
        
        if (resultE == 'C') {
            return result.textContent = '';
        }
    })
})

function operators(v1, op, v2) {
    if (op == 'x') {
        return result.textContent = v1 * v2;
    } else if (op == '/') {
        return result.textContent = (v1 / v2).toFixed(2);
    } else if (op == '+') {
        return result.textContent = v1 + v2;
    } else if (op == '-') {
        return result.textContent = v1 - v2;
    }
}