window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let employeePayrollList = createEmployeePayrollJSON();
    for(const employeePayrollData of employeePayrollList){
        innerHtml = `${innerHtml}
            <tr>
                <td>
                    <img class="profile" src="${employeePayrollData._profile}" alt="">
                </td>
                <td>${employeePayrollData._name}</td>
                <td>${employeePayrollData._gender}</td>
                <td>${getDeptHtml(employeePayrollData._department)}</td>
                <td>₹ ${employeePayrollData._salary}</td>
                <td>${employeePayrollData._startDate}</td>
                <td>
                    <img src="../assets/icons/delete-black-18dp.svg" alt="">
                    <img src="../assets/icons/create-black-18dp.svg" alt="">
                </td>
            </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}
const createEmployeePayrollJSON = () => {
    let employeePayrollListLocal = [
        {
            _name: 'Jhanvi Kanakhara',
            _gender: 'Female',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '350000',
            _startDate: '1 June 2022',
            _note: '',
            _id: new Date().getTime(),
            _profile: '../assets/profile-images/Ellipse -1.png'
        },
        {
            _name: 'Karan Shah',
            _gender: 'Male',
            _department: [
                'Sales',
            ],
            _salary: '400000',
            _startDate: '1 June 2022',
            _note: '',
            _id: new Date().getTime(),
            _profile: '../assets/profile-images/Ellipse -2.png'
        }
    ];
    return employeePayrollListLocal;
}
const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for(const dept of deptList){
        deptHtml = `${deptHtml}<div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}