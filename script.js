console.log(`im js`);
var btn = document.querySelector('.btn');
var guess = document.querySelector('input');
var msg = document.querySelector(".msg");
let play = false;
let newWords = "";
let ranWords = "";

let words = ['php', 'c++', 'java', 'python', 'react', 'c#', 'javascript', 'flask'];

let createNewWords = () => {

    let ranNum = Math.floor(Math.random() * words.length);
    let newTempWords = words[ranNum];
    //console.log(newTempWords);
    return newTempWords;
}
let scrampleWords = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let temp = arr[i]
        console.log(temp);
        let j = Math.floor(Math.random() * (i + 1));

        arr[i] = arr[j];
        arr[j] = temp;

    }
    return arr;
}
btn.addEventListener('click', function() {
    if (!play) {
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords = createNewWords();
        ranWords = scrampleWords(newWords.split("")).join("");
        //console.log(ranWords);
        msg.innerHTML = `Guess the Word "${ranWords}"`;
    } else {
        let tempWord = guess.value;
        if (newWords == tempWord) {
            console.log(`correct`);
            play = false;
            msg.innerHTML = `Awesome its correct ${newWords}`;
            btn.innerHTML = `Start Again`;
            guess.classList.toggle('hidden');
            guess.value = "";


        } else {
            console.log(`incorrect`);
            msg.innerHTML = `Sorry!! ${tempWord} is incorrect Try this  ${ranWords}`;
            btn.innerHTML = `Try Again!!`;
        }
    }
})