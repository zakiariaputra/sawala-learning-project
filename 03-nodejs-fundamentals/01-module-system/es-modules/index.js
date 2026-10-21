import {tambah, kurang, rataRata} from './matematika.js';
import sapa, {sapaFormal} from './sapa.js';


console.log("pertambahan:", tambah(10, 15));
console.log("pengurangan:", kurang(10, 15));
console.log("nilaiRataRata:", rataRata([10, 15, 20]));

console.log(sapa("zaki"));
console.log(sapaFormal("zaki"));