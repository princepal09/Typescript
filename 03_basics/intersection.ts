type personTa = {name : string}
type personTb = {age : number}
type personTc = personTa & personTb

var personDataA : personTa = {name : 'Prince'}
var personDataB : personTb = {age : 21}

var personDataC : personTc = {name : 'Prince', age : 21}