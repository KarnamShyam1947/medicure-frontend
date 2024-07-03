const BASE_URL = "https://cloudsip202324.pythonanywhere.com"

export async function getPrediction(file, type) {    
    try {
        const formData = new FormData();
        formData.append("file", file)
        formData.append("type", type.toUpperCase())
        const response = await fetch(`${BASE_URL}/disease/general`,{
            method: "POST",
            body:formData
        });
        const resp = await response.json();
        return resp;

    } catch (error) {
        return error;
    }
}