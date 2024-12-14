export async function fetchEmployees() { 
    try { 
        const response = await fetch('../data/employees.json') 
        if (!response.ok) { 
            throw new Error('Issues with network.') 
        } const data = await response.json() 
        return data 
    } catch (error) { 
        console.error('Error, issues found with fetch:', error) 
    }
}