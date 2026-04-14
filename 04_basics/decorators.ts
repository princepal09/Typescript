function classLogger(constructor : Function){
    console.log(constructor.name)
}

@classLogger
class customMaths{
    val1 : number;
    val2 : number;

    constructor(x : number, y : number){
        this.val1 = x,
        this.val2 = y
    }


}

var cm1 = new customMaths(10, 20)