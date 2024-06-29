const BASE_URL = "http://localhost:8080/api/v1"

export async function getDepartments() {    
    try {
        const response = await fetch(`${BASE_URL}/home/departments`);
        const resp = await response.json();
        return resp;

    } catch (error) {
        return error;
    }
}

export async function getDoctorsByDepartment(dept) {    
    try {
        const response = await fetch(`${BASE_URL}/home/doctors?department=${dept}`);
        const resp = await response.json();
        return resp;

    } catch (error) {
        return error;
    }
}