const BASE_URL = "http://localhost:8080/api/v1"

export async function addDoctor(data) {  
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    try {
        const response = await fetch(`${BASE_URL}/admin/add-doctor`, {
            method: "POST",
            body: JSON.stringify(data),
            headers:new Headers({
                'Authorization': `Bearer ${currentUser.token}`,
                "Content-Type": "application/json"
            })
        });
        const resp = await response.json();
        return resp;

    } catch (error) {
        return error;
    }
}