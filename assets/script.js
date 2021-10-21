const kmLenght = parseInt(prompt('Buongiorno, inserire il numero di km che intende percorrere'));
const ageTrvlr = parseInt(prompt('Prego inserire la sua età'));

let errorMsg = '';

if(isNaN(ageTrvlr)){
    errorMsg = 'Per favore, inserire un numero corretto.'; 
}else if (ageTrvlr > 120){
    errorMsg = 'Per favore, inserire un numero realistico. Grazie.';
}

if(isNaN(kmLenght)){
   errorMsg = 'Per favore, inserire un numero.';
}

let price = kmLenght * 0.21;
let mnrPrice = price * 0.8;
let mgPrice = price * 0.6; 

if (ageTrvlr < 18){
    price = mnrPrice;
}else if (ageTrvlr > 65){
    price = mgPrice;
}

console.log('Errore', errorMsg);

document.getElementById('km').innerHTML = kmLenght;
document.getElementById('final-price').innerHTML = price.toFixed(2);
document.getElementById('error').innerHTML = errorMsg;