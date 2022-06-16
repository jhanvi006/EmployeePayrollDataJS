window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
        <tr>
            <td>
                <img class="profile" src="../assets/profile-images/Ellipse -1.png" alt="">
            </td>
            <td>Jhanvi Kankhara</td>
            <td>Female</td>
            <td>
                <div class="dept-label">Engineer</div>
                <div class="dept-label">Finance</div>
            </td>
            <td>₹ 350000</td>
            <td>1 June 2022</td>
            <td>
                <img src="../assets/icons/delete-black-18dp.svg" alt="">
                <img src="../assets/icons/create-black-18dp.svg" alt="">
            </td>
        </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}