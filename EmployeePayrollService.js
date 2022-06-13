class EmployeePayrollData{
    // id;
    // salary;
    // gender;
    // startDate;

    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];

    }
    get id(){ return this._id; }
    set id(id){
        let idRegex = RegExp('^([1-9][0-9]*)$');
        if(idRegex.test(id))
            this._id = id;
        else throw 'Id is Incorrect!'; 
    }
    get name(){ return this._name; }
    set name(name){ 
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect!'; 
    }
    get salary(){ return this._salary; }
    set salary(salary){
        let salaryRegex = RegExp('^([1-9][0-9.]*)$');
        if(salaryRegex.test(salary))
            this._salary = salary;
        else throw 'Salary is Incorrect!'; 
    }
    get gender(){ return this._gender; }
    set gender(gender){
        let genderRegex = RegExp('^([m,M,f,F]?)$');
        if(genderRegex.test(gender))
            this._gender = gender;
        else throw 'Gender is Incorrect!'; 
    }
    get startDate(){ return this._startDate; }
    set startDate(startDate){
        if(startDate <= Date.now())
            this._startDate = startDate;
        else throw 'Start date is incorrect!';
    }

    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" : 
                        this.startDate.toLocaleDateString("en-US", options);
        return "id: "+this.id+", name: "+this.name+", salary:"+this.salary+
        ", gender: "+this.gender+", start date: "+empDate;
    }
}
let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000, "M", new Date());
console.log(employeePayrollData.toString());
let newEmployeePayrollData = new EmployeePayrollData(2, "Terrisa", 40000, "F", new Date());
console.log(newEmployeePayrollData.toString());

// name validation
try{
    let empPayrollData = new EmployeePayrollData(1, "Jo", 45000, "M", new Date());
    console.log(empPayrollData.toString());
}
catch(e){
    console.log(e);
}
// id validation
try{
    let empPayrollData = new EmployeePayrollData(0, "John", 45000, "M", new Date());
    console.log(empPayrollData.toString());
}
catch(e){
    console.log(e);
}
// salary validation
try{
    let empPayrollData = new EmployeePayrollData(1, "John", 000, "M", new Date());
    console.log(empPayrollData.toString());
}
catch(e){
    console.log(e);
}
// gender validation
try{
    let empPayrollData = new EmployeePayrollData(1, "John", 45000, "O", new Date());
    console.log(empPayrollData.toString());
}
catch(e){
    console.log(e);
}
// date validation
try{
    let empPayrollData = new EmployeePayrollData(1, "John", 45000, "M", "June 20, 2023");
    console.log(empPayrollData.toString());
}
catch(e){
    console.log(e);
}
