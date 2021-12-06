//DOM Selection

//document.getElementById -> element
const judul = document.getElementById('judul');
judul.style.color="green";
judul.style.backgroundColor = "lightblue";
judul.innerHTML ="SingleCoder";

//document.getElementsByTagName ->HTML collection
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor="lightgreen";
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize='50px';

//document.getElementsByClassName
const p1 = document.getElementsByClassName('p1')[0];
p1.style.fontFamily ="Serif";

//document.querySelector
