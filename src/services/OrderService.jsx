const BASE_URL = "http://localhost:8080/api/v1"

export async function placeOrder(medicineId, data) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    try {
        data.userId = currentUser.id;
        data.medicineId = Number(medicineId);
        data.quantity = Number(data.quantity)
        console.log(data);
        
        const response = await fetch(`${BASE_URL}/orders/place-order`, {
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

export async function myOrders() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    try {
        
        const response = await fetch(`${BASE_URL}/orders/my-orders`, {
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
