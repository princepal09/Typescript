// function fruits(){
//     return 'Apple'
// } // JS

function fruits(): number {
  return 10;
}

function simple(): boolean {
  return true;
}

function complex() : string | number {
  let data = 10;
  let name = "Prince";
  let type = 'string';

  if (type == 'string') return data;
  else return name;
}

function anything(): any {
  return;
}
console.log("helloo") 
