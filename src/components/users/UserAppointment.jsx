import React, { useEffect, useState } from 'react'
import * as authService from '../../services/AuthService'
import * as appointmentService from '../../services/AppointmentService'
import Layout from '../Layout'

function UserAppointment() {
    const [appointments, setAppointments] = useState([]);
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        const user = authService.getCurrentUser();
        setCurrentUser(user);

        if (currentUser == null) {
            toast.error("Login to access this route")
            navigate("/login");
        }
        else {
            const fetchAppointments = async () => {
                const depts = await appointmentService.myAppointments()
                setAppointments(depts);
            }

            fetchAppointments();
        }
    }, [])

    return (
        <Layout>
            <div className="cv-breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cv-breadcrumb-box">
                                <h1>Your Appointments</h1>
                                <ul>
                                    <li><a href="index5.html">Home</a></li>
                                    <li>Your Appointments</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cv-order-detail spacer-top-less spacer-bottom">
                <div className="container">
                    <div className="cv-heading">
                        <h1>Appointments details</h1>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="cv-last-order">
                                {
                                    currentUser.role == "USER" || currentUser.role == "ADMIN"
                                    ?
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Doctor name</th>
                                                <th>Doctor Email</th>
                                                <th>Doctor Department</th>
                                                <th>Date</th>
                                                <th>Slot</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                appointments.map((data, idx) => (
                                                    <tr key={idx}>
                                                        <td>{data.doctorName}</td>
                                                        <td>{data.doctorEmail}</td>
                                                        <td>{data.doctorDepartment}</td>
                                                        <td>{data.appointmentDate}</td>
                                                        <td>{data.appointmentSlot}</td>
                                                        <td>
                                                            <a href="#" className="btn btn-danger">Cancel</a>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                    :
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Patient name</th>
                                                <th>Patient Email</th>
                                                <th>Reason</th>
                                                <th>Date</th>
                                                <th>Slot</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                appointments.map((data, idx) => (
                                                    <tr key={idx}>
                                                        <td>{data.patientName}</td>
                                                        <td>{data.patientEmail}</td>
                                                        <td>{data.reason}</td>
                                                        <td>{data.appointmentDate}</td>
                                                        <td>{data.appointmentSlot}</td>
                                                        <td>
                                                            <a href="#" className="btn btn-danger">Cancel</a>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                            
                                        </tbody>
                                    </table>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default UserAppointment