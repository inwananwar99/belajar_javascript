//DOM Selection

//document.getElementById -> element
// const judul = document.getElementById('judul');
// judul.style.color="green";
// judul.style.backgroundColor = "lightblue";
// judul.innerHTML ="SingleCoder";

//document.getElementsByTagName ->HTML collection
// const p = document.getElementsByTagName('p');
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor="lightgreen";
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize='50px';

//document.getElementsByClassName
// const p1 = document.getElementsByClassName('p1')[0];
// p1.style.fontFamily ="Serif";

//document.querySelector
// const container = document.querySelector('#container');
// container.style.backgroundColor = 'blue';

// const link = document.querySelector('a');
// link.style.color='white';
// link.innerHTML = 'Aku ubah yaaaa, jadi inwananwar99';

// //document.querySelectorAll
// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'green';
// }

// const li = document.querySelectorAll('li');
// for (let j = 0; j < p.length; j++) {
//     li[j].style.backgroundColor = 'red';
// }

//mempersempit root 
const b = document.querySelector('section#b');
const a = b.getElementsByTagName('p')[0];
a.style.backgroundColor = 'blue';


