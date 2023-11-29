function tableGen(){
    for(let i = 1; i <= 100; i++){
        const divGen = document.createElement("div");
        document.querySelector(".square-container").appendChild(divGen);
        divGen.classList.add('square', 'square'+i);

        document.querySelector(".square"+i).innerHTML = i;
    }
}

tableGen();