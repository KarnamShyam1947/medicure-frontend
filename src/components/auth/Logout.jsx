import React, { useEffect } from 'react'
import * as authService from './../../services/AuthService';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';

function Logout() {

    const navigate = useNavigate();

    useEffect(() => {
        authService.logout();
        toast.success("Logged out successfully")
        navigate("/", { replace : true })
    }, [])

    // return (
    //     <>
    //     </>
    // )
}

export default Logout