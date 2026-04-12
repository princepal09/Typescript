interface collegeDataType {
    name : string,
    displayTeacherName() : void
}

class CollegeData implements collegeDataType{
    name : string
    constructor(cName : string){
        this.name = cName
    }

    displayTeacherName() : void{
        console.log("Prince", "Monika", "Rahul")
    }
}

const college1 =new CollegeData('Mind Power')
console.log(college1.displayTeacherName())