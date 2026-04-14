type personT = {
  name: string;
  age: number;
  isEm: boolean;
};

let personData: personT = {
  name: "Prince Pal",
  age: 20,
  isEm: true,
};

type personX = keyof personT;
let personDataX: personX;
personDataX = "name";
personDataX = "age";
personDataX = "isEm";
