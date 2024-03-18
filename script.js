const matrixSize = 10;
const varList = [];
const table = document.getElementById('numberMatrix');

for (let i = 0; i < matrixSize; i++) {
    const row = table.insertRow(i);
    for (let j = 0; j < matrixSize; j++) {
        const cell = row.insertCell(j);
        const number = i * matrixSize + j;
        cell.innerHTML = number;
        cell.classList.add('green');

        cell.onclick = function() {
            if (cell.classList.contains('green')) {
                cell.classList.remove('green');
                cell.classList.add('red');
                varList.push(number);
            } else {
                cell.classList.remove('red');
                cell.classList.add('green');
                const index = varList.indexOf(number);
                if (index > -1) {
                    varList.splice(index, 1);
                }
            }
            document.getElementById('selectedCount').innerText = varList.length;
        };
    }
}

function shuffleArray(array) {
    const shuffledArray = [...array]; // Make a copy of the original array to avoid modifying it directly
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
    }
    return shuffledArray;
}


document.getElementById('printButton').onclick = function() {
    const randomizedList = shuffleArray(varList);
    const outputString = randomizedList.map((number, index) => `#${index + 1} = ${number}`).join('<br>');
    
    document.getElementById('modalContent').innerHTML = outputString;
    document.getElementById('myModal').style.display = 'block';
};

function hideModal() {
    document.getElementById('myModal').style.display = 'none';
}
