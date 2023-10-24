let buttonSetBackground = document.getElementById('set-background');
console.log("🚀 ~ file: script.js:2 ~ buttonSetBackground:", buttonSetBackground);
let p1 = document.getElementById('p-1');
let p2 = document.getElementById('p-2');

// sprawdz te 4-ry zapisy
// const setBackground = () => { // funkcja zapis ok
// const setBackground() { // funkcja zapis nie dziala
function setBackground() { // funkcja zapis dziala
    // p1.setAttribute('class','bg-red');
    // p2.setAttribute('class', 'bg-yellow');

    p1.classList.add('bg-red');
    p2.classList.toggle('bg-yellow');

//    p1.style.backgroundColor = 'red';
//    p2.style.backgroundColor = 'yellow'

    console.log(p1);
    console.log(p2);
    console.log('klikniete');
} 
//funkcja bez nawiasu zeby sie nie wykonala po uruchomieniu kodu tylko po nacisnieciu przycisku
buttonSetBackground.addEventListener('click', setBackground );



