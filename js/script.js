import { fetchEmployees } from './modules/init.js' 
// CREATE AN ARRAY OF EMPLOYEES
let arrEmployees = [
    [34123413, "Zak Ruvalcaba", 3424, "zak@vectacorp.com", "Executive"],
    [23424665, "Sally Smith", 2344, "sally@vectacorp.com", "Administrative"],
    [12341244, "Mark Martin", 5352, "mark@vectacorp.com", "Sales"],
    [14545423, "Robin Banks", 7867, "robin@vectacorp.com", "Marketing"],
    [13413453, "Sue Wedge", 1235, "sue@vectacorp.com", "QA"]
]

// GET DOM ELEMENTS
let empTable    = document.querySelector('#employees')
let empCount    = document.querySelector('#empCount')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
// Load the grid when the DOM content is loaded 
document.addEventListener('DOMContentLoaded', buildGrid)
// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        // CONFIRM THE DELETE
        if (confirm('Select OK to confirm employee to delete.')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.parentNode.rowIndex
            // REMOVE EMPLOYEE FROM ARRAY
            empTable.deleteRow(rowIndex)
        }
    }
})

// BUILD THE EMPLOYEES GRID
async function buildGrid() { 
// Fetch employee data asynchronously 
const employees = await fetchEmployees() 
// Clear existing rows 
empTable.innerHTML = '' 
// Loop through the employee data and build rows 
let tbody = document.createElement('tbody') 
employees.forEach((employee) => { let row = document.createElement('tr') 
    row.innerHTML = ` 
        <td>${employee.id}</td> 
        <td>${employee.name}</td> 
        <td>${employee.extension}</td> 
        <td>${employee.email}</td> 
        <td>${employee.department}</td> 
        <td><button class="btn btn-danger btn-sm delete">Delete</button></td> ` 
        tbody.appendChild(row) 
    }) 
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody)
    // UPDATE EMPLOYEE COUNT
    empCount.value = `(${arrEmployees.length})`
}