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

var collegeData2: Pick<collegeType, "name" | "location"> = {
  name: "Prince",
  location: "Delhi",
};


// OMIT

var collegeData3: Omit<collegeType, 'branch'> = {
    name : "PR",
    location : "Ff",
    students : 100
}

// Exclude

type APIStatus = 'loading' | 'error' | 'pending' | 'success'
var apicall : Exclude<APIStatus, 'pending'> = 'success'
apicall = 'loading'

// Extract 

var apicall2 : Extract<APIStatus, 'error' | 'success'> = 'success'

// Non Nullable

type randomType = string | number | undefined | null | string[]

var randomData : NonNullable<randomType> = 'hello'

// Record

type siteRole = 'Admin' | 'User' | 'Guest'

var siteRoleOption : siteRole = 'Admin'

var roleName : Record<siteRole, string> = {
    Admin : "anil",
    User  : "Adif",
    Guest : "sgodj"
}
