//menangkap pilihan player
let p = prompt('pilih : gunting, kertas, batu');
//menangkap pilihan computer
//generate bilangan random
let comp = Math.random();
if (comp < 0.34){
    comp = 'gunting';
}else if(comp >= 0.34 && comp < 0.67){
    comp = 'kertas';
}else{
    comp = 'batu';
}
let hasil = '';
//rule of game
if(p == comp){
    hasil = 'SERI!';
}else if(p == 'gunting'){
    hasil = (comp == 'kertas') ? 'Menang' : 'Kalah';
}else if(p == 'kertas'){
    hasil = (comp == 'batu') ? 'Menang':'Kalah';
}else if(p == 'batu'){
    hasil = (comp == 'gunting') ? 'Menang':'Kalah';
}else{
    hasil = 'pilihan anda salah';
}

alert('Kamu pilih : '+p+' dan CPU memilih : '+comp+'\n maka hasilnya : kamu '+ hasil);