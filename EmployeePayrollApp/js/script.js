// const fs = require('fs');
//--------------  event listener for name validation --------------
window.addEventListener('DOMContentLoaded', (event) =>{
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function(){
        if(name.value.length == 0){
            textError.textContent = "Name can't be empty";
            return;
        }
        try{
            new EmployeePayrollData(name.value);
            textError.textContent = "";
        }
        catch(e){
            textError.textContent = e;
        }
    });
    //--------------  event listener for salary --------------
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    salary.addEventListener('input', function(){
        output.textContent = salary.value;
    });
});
//-------------- create json object ---------------------
const isValidElement = (element) => {
    return element.name && element.value;
};
const isValidValue = (element) => {
    return !['checkbox', 'radio'].includes(element.type) || element.checked;
};
const isCheckbox = (element) => element.type === 'checkbox';
const formToJSON = (elements) => 
    [].reduce.call(
        elements,
        (data, element) => {
            if (isValidElement(element) && isValidValue(element)) {
                if (isCheckbox(element)) {
                  data[element.name] = (data[element.name] || []).concat(element.value);
                } else {
                  data[element.name] = element.value;
                }
            }
            return data;
        },
        {},
    );
function finished(err)
{
    alert('success');
}
const handleFormSubmit = (event) => {
        event.preventDefault();
        const data = formToJSON(form.elements);
        const jsonData = JSON.stringify(data, null, '');
        console.log(jsonData);
        // fs.writeFileSync('../assets/json/db.json', jsonData, finished);
}
const form = document.querySelector('form');
form.addEventListener('submit', handleFormSubmit);
//------------------------end json object ----------------------------
// function save(){
    // const name = document.getElementById('name').value;
    // const profile = document.querySelector('input[name="profile"]:checked').value;
    // const gender = document.querySelector('input[name="gender"]:checked').value;
    // let department = []; 
    // let inputElements = document.getElementsByClassName('checkbox');
    // for(let i=0; inputElements[i]; i++){
    //     if(inputElements[i].checked){
    //         department.push(inputElements[i].value);
    //     }
    // }
    // // const department = document.querySelector('.checkbox:checked').value;
    // const salary = document.getElementById('salary').value;
    // const day = document.getElementById('day').value;
    // const month = document.getElementById('month').value;
    // const year = document.getElementById('year').value;
    // const date = day+' '+month+', '+year;
    // const notes = document.getElementById('notes').value;

    // try{
    //     new EmployeePayrollData(name, profile, gender, 
    //         department, salary, date, notes);
    //     data = employeePayrollData.toString();
    //     console.log(data);
    //     alert("Data stored for "+name);
    // }
    // catch(e){
    //     console.log(e);
    // }
// }