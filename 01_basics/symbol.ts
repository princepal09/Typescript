var sym = Symbol();
var sym2 = Symbol();


console.log(sym == sym2);

const dId = Symbol('id');
const obj = {
    [dId] : 100,
    name : 'Prince Pal'
}


