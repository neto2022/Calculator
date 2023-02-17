const result = document.getElementById('textResult');
const element = document.querySelectorAll('button');

function operators(v1, op, v2) {
  if (op === 'x') {
    result.textContent = v1 * v2;
  }
  if (op === '/') {
    result.textContent = (v1 / v2).toFixed(2);
  } if (op === '+') {
    result.textContent = parseInt(v1, 10) + parseInt(v2, 10);
  } if (op === '-') {
    result.textContent = v1 - v2;
  }
}

element.forEach((RandomElement) => {
  RandomElement.addEventListener('click', (e) => {
    const resultE = e.target.dataset.value;
    let splited;

    if (resultE === '=') {
      if (result.innerText.includes('x')) {
        splited = result.innerText.split('x');
        splited[2] = 'x';
      } else if (result.innerText.includes('/')) {
        splited = result.innerText.split('/');
        splited[2] = '/';
      } else if (result.innerText.includes('+')) {
        splited = result.innerText.split('+');
        splited[2] = '+';
      } else if (result.innerText.includes('-')) {
        splited = result.innerText.split('-');
        splited[2] = '-';
      }

      operators(splited[0], splited[2], splited[1]);
    }
    if (resultE !== '=') {
      result.innerText += resultE;
    }

    if (resultE === 'C') {
      result.textContent = '';
    }
  });
});
