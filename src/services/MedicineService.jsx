const BASE_URL = 'http://localhost:8080/api/v1';

export async function addMedicine(name, price, description, file) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    
    var formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("file", file);
    
    try {
        const response = await fetch(`${BASE_URL}/medicine/`, {
            method: 'POST',
            body: formData,
            headers:new Headers({
                'Authorization': `Bearer ${currentUser.token}`
            })
        });
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error(error);
        return error;
    }
    
}

// http://localhost:8080/api/v1/home/medicines
export async function getMedicines() {
    try {
        const response = await fetch(`${BASE_URL}/home/medicines`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
        return error;
    }
}

// http://localhost:8080/api/v1/home/medicines/{id} 
export async function getMedicineById(id) {
    try {
        const response = await fetch(`${BASE_URL}/home/medicines/${id}`);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
        return error;
    }
}
