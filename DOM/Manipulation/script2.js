//DOM Manipulation (Node)
//1. buat element
const h1 = document.createElement('h1');
const isi = document.createTextNode('Selamat datang Bencong');
//simpen isi ke dalam element h1
h1.appendChild(isi);
//selection element section dengan id a
let section = document.getElementById('a');
//simpan elemen baru ke section dengan id a
section.appendChild(h1);

//2. buat element
const p = document.createElement('p');
const isi1 = document.createTextNode('Paragraf baruuu nich');
//simpen isi ke dalam element h1
p.appendChild(isi1);
//selection element section dengan id a
let section1 = document.getElementById('b');
//simpan elemen baru ke section dengan id a
section1.appendChild(p);
