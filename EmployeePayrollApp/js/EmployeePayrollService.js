class EmployeePayrollData{
    constructor(...params){
        this.name = params[0];
        this.profile = params[1];
        this.gender = params[2];
        this.department = params[3];
        this.salary = params[4];
        this.startDate = params[5];
        this.notes = params[6];
    }
    get name(){ return this._name; }
    set name(name){ 
        let nameRegex = RegExp('^[A-Z]{1}[A-Za-z\\s]{2,}$');
        if(nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect!'; 
    }
    get profile(){ return this._profile; }
    set profile(profile){ 
        this._profile = profile;
    }
    get salary(){ return this._salary; }
    set salary(salary){
        this._salary = salary;
    }
    get gender(){ return this._gender; }
    set gender(gender){
        this._gender = gender;
    }
    get department(){ return this._department; }
    set department(department){
        this._department = department;
    }
    get notes(){ return this._notes; }
    set notes(notes){
        this._notes = notes;
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
        return `name: ${this._name}, profile: ${this._profile}, gender: ${this._gender}, 
        department: ${this._department}, salary: ${salary}, start date: ${empDate}, 
        notes: ${this._notes}`;
    }
}