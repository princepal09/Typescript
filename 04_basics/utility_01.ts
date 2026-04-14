// Partial

interface collegeType {
  name: string;
  location: string;
  students: number;
  branch: string;
}

let collegeData1: Partial<collegeType> = {
  name: "IIT DELHI",
  location: "delhi",
  students: 800,
};

// Required

function getCollegeData(data: Required<collegeType>) {
  return data;
}

getCollegeData({
  name: "Prince",
  location: "Delhi",
  students: 900,
  branch: "Dei",
});

// Read Only

var collegeData: Readonly<collegeType> = {
  name: "Prince",
  location: "Delhi",
  students: 900,
  branch: "Dei",
};

// collegeData.name = 'ref'


// PICK 

var collegeData2 : Pick<collegeType , 'name' | 'location'> = {
     name : 'Prince',
     location : 'Delhi'
}
