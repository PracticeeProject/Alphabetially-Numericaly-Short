// -------------------------------------------
//      This is Alphabetically Sort
// -------------------------------------------

const names=["Labib", "arpon", "Shahin","Akash","bablu","Babu", "Tamim"];

console.log(names.sort());

// -------------------------------------------
//        This is Numaric Sort
// -------------------------------------------

const rollas = [7,3,10,0,7,3,23,-3,22,11,9];

let hello = rollas.sort(function(a,b){
    return a-b;
});

console.log(hello);