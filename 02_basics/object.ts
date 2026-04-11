var userData: {
  name: string;
  age: number;
  company: string;
  city: undefined | string;
} = {
  name: "Prince Pal",
  age: 20,
  company: "Oracle",
  city: undefined,
};

userData.city = "Pith";

var userData2: {
  [key: string]: string | number | undefined;
} = {
  name: "Prince Pal",
  age: 20,
  company: "Oracle",
  city: undefined,
};

// Nested Object

var userData4: {
  name: string;
  age: number;
  company: string;
  address: {
    houseNo: string;
    sector: string;
    city: string;
  };
} = {
  name: "Prince Pal",
  age: 20,
  company: "Oracle",
  address: {
    houseNo: "89",
    sector: "sector - 49",
    city: "Pith",
  },
};
