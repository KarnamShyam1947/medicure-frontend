const BASE_URL = "http://localhost:8080/api/v1"

export async function makeAppointment(data) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    try {
        data.userId = currentUser.id;
        data.doctorId = Number(data.doctorId)
        
        console.log(data);
        
        const response = await fetch(`${BASE_URL}/appointment/make-appointment`, {
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

export async function myAppointments() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    try {        
        const response = await fetch(`${BASE_URL}/appointment/my-appointments`, {
            method: "GET",
            headers:new Headers({
                'Authorization': `Bearer ${currentUser.token}`
            })
        });
        const resp = await response.json();
        return resp;

    } catch (error) {
        return error;
    }
}
