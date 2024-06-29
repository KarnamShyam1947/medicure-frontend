import React from 'react'

const BASE_URL = "http://localhost:8080/api/v1"

export async function login(data) {    
    try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const resp = await response.json();
        return resp;

    } catch (error) {
        return error;
    }
}

export function logout() {
    localStorage.removeItem("currentUser");
}

export function getCurrentUser() {
    const currentUser = localStorage.getItem("currentUser");
    return JSON.parse(currentUser);
}

export async function register(data) {
    try {
        data.role = "USER";
        
        const response = await fetch(`${BASE_URL}/auth/register`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const resp = await response.json();
        return resp;

    } catch (error) {
        return error;
    }
}

export async function setPassword(data, token) {    
    try {
        data.token = token;
        
        const response = await fetch(`${BASE_URL}/auth/set-password`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const resp = await response.json();
        return resp;

    } catch (error) {
        return error;
    }
}
