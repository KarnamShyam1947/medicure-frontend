const BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function getPrediction(file, type) {    
    try {
        const formData = new FormData();
        formData.append("file", file)
        formData.append("type", type.toUpperCase())
        const response = await fetch(`${BASE_URL}/predict/general`,{
            method: "POST",
            body:formData
        });
        const resp = await response.json();
        return resp;

    } catch (error) {
        return error;
    }
}