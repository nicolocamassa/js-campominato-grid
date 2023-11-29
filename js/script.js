function tableGen(){
    for(let i = 1; i <= 100; i++){
        const divGen = document.createElement("div");
        document.querySelector(".square-container").appendChild(divGen);
    }
}

tableGen();