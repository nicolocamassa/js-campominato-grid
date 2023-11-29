function tableGen() {
    btnNone = document.getElementById('genBtn');
    btnNone.style.display = 'none';

    for (let i = 1; i <= 100; i++) {
        const divGen = document.createElement("div");
        document.querySelector(".square-container").appendChild(divGen);
        divGen.classList.add('square', 'square' + i);
        const squareNum = document.querySelector(".square" + i);
        squareNum.innerHTML = i

        divGen.addEventListener('click', function () {
            this.classList.toggle('bg-primary')
            console.log(`Quadrato ${squareNum.innerHTML} cliccato`)
        })
    }
}

