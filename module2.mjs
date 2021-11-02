// import varA, {b, c, d} from './module1.mjs';

// console.log(varA);
// console.log(b);
// console.log(c);
// console.log(d);





var m = "This is a string. that is looking cool. but may not look supercool. this is a test";
var ar = [];
function capsFirst() {
    ar = m.split(".");
    for(var i=0; i<ar.length; i++){
        var temp = ar[0];
        ar[i] = ar[i].charAt(1).toUpperCase() + ar[i].slice(2);
        console.log(ar[i]);
        ar[0] = temp;
    }
    return ar.join(" . ");
}

console.log(capsFirst());