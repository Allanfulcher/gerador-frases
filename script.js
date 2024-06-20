const array1 = ["O", "Um", "Nosso", "Este", "Aquele", "Cada", "Uma", "Toda", "Algum", "Nenhum"];
const array2 = ["gato", "cachorro", "carro", "computador", "livro", "dia", "tempo", "amigo", "jogo", "sonho"];
const array3 = ["é incrível", "corre rápido", "brilha muito", "funciona bem", "é especial", "é precioso", "dura pouco", "traz alegria", "é divertido", "é estranho"];

function generateRandomPhrase() {
    const number1 = Math.floor(Math.random() * 10);
    const number2 = Math.floor(Math.random() * 10);
    const number3 = Math.floor(Math.random() * 10);
    
    generatePhrase(array1[number1], array2[number2], array3[number3]);
}

function generatePhrase(w1, w2, w3) {
    const phrase = `${w1} ${w2} ${w3}`;
    document.getElementById('output').innerText = phrase;
}
