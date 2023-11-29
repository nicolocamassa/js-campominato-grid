function tableGen() {
    /* Scompare il bottone */
    btnNone = document.getElementById('genBtn');
    btnNone.style.display = 'none';

    /* Generazione dei 100 quadrati */
    for (let i = 1; i <= 100; i++) {
        /* Creiamo l'elemento div all'interno del container */
        const divGen = document.createElement("div");
        document.querySelector(".square-container").appendChild(divGen);

        /* Ogni quadrato avrà la propria classe identificandosi con il proprio numero */
        divGen.classList.add('square', 'square' + i);
        const squareNum = document.querySelector(".square" + i);
        squareNum.innerHTML = i

        /* Al click del quadrato viene cambiato il colore e mostrato in console la sua posizione */
        divGen.addEventListener('click', function () {
            this.classList.toggle('bg-primary')
            console.log(`Quadrato ${squareNum.innerHTML} cliccato`)
        })
    }
}

function difficulty(){
    
}





