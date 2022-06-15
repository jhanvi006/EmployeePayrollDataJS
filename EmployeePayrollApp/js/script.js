// const fs = require('fs');
function save(){
    try {
        createEmployeePayroll();
        createJsonObject();
    } catch (e) {
        return;
    }
}
//------------------------create employee payroll object ----------------------------
createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = document.getElementById('name').value;
    } catch (e) {
        nameError = document.querySelector('.name-error');
        nameError.textContent = e;
    }
    employeePayrollData.profile = document.querySelector('input[name="profile"]:checked').value;
    employeePayrollData.gender = document.querySelector('input[name="gender"]:checked').value;
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = document.getElementById('salary').value;
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const date = day+' '+month+' '+year;
    try {
        employeePayrollData.startDate = date;
    } catch (e) {
        const dateError = document.querySelector('.date-error');
        dateError.textContent = e;
    }
    employeePayrollData.notes = document.getElementById('notes').value;

    data = employeePayrollData.toString();
    console.log(data);
    alert(data);
}
const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let setItems = [];
    allItems.forEach(item => {
        if(item.checked){
            setItems.push(item.value);
        }
    });
    return setItems;
}
//-------------- create json object ---------------------
const createJsonObject = () => {
    // event.preventDefault();
    const form = document.querySelector('form');
    const data = formToJSON(form.elements);
    const jsonData = JSON.stringify(data, null, '');
    console.log(jsonData);
    // fs.writeFileSync('../assets/json/db.json', jsonData, finished);
}
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
