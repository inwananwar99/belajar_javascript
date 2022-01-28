//Manipulation 1. element.innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = 'Single Coder';

// const section = document.querySelector('section#a');
// let a = section.getElementsByTagName('a')[0];
// a.innerHTML = 'Gua hack pake DOM JavaScript wkwk';

const section1 = document.querySelector('section#b');
let a = section1.getElementsByTagName('p')[0];
a.classList.add('judul2');
a.classList.add('judul3');
a.classList.add('judul4');
a.classList.replace('judul2','dom');

//Manipulation 2. element.setAttribute
// const anchor = document.querySelector('section#a a');
// anchor.innerHTML='Instagram Inwan Anwar Solihudin';
// anchor.setAttribute('href','http://instagram.com/inwananwar99');

//Manipulation 3. classList.toggle
// const judul = document.querySelector('.p1');
// judul.classList.toggle('text-center');