const PromptSync = require("prompt-sync")();
let palavra = String(promtp("Digite a palavra"));

function verificar(palavra){
    let result = 0;
    for(let i = 0; i < palavra.length; i++){
        if(palavra[i] === "a" || palavra[i] === "A"){
            result += 1;
        }
    }
    return result;
}

console.log(verificar(palavra));