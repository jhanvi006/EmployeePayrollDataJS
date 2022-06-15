// const fs = require('fs');
const save = () => {
    try {
        let employeePayrollData =  createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
        // createJsonObject();
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
    alert(data);
    return data;
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
//-------------- create and update storage ---------------------
const createAndUpdateStorage = (employeePayrollData) => {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if(employeePayrollList != undefined){
        employeePayrollList.push(employeePayrollData);
    }
    else{
        employeePayrollList = [employeePayrollData];
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
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
//-------------- reset form ---------------------
const resetForm = () => {
    setValue('#name', '');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary', '');
    setTextValue('.salary-output', '400000');
    setValue('#day', '1');
    setValue('#month', 'January');
    setValue('#year', '2022');
    setValue('#notes', '');
    setTextValue('.name-error', '');
    setTextValue('.date-error', '');
}
const setValue = (selector, value) => {
    const element = document.querySelector(selector);
    element.value = value;
}
const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
}
const setTextValue = (selector, value) => {
    const element = document.querySelector(selector);
    element.textContent = value;
}