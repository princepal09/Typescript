class EmpInfo{
    _name : string = 'Prince'
    _email : string = 'princepal@'

    get name() : string{
        return 'Mr.' + this._name
    }

    set email(val : string){
         this._email = "emp" + val
    }
}


const emp1 = new EmpInfo()

emp1.email = 'consonfosnfs@'
console.log(emp1._email)
