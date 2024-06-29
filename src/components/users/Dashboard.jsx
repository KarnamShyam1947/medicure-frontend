import React from 'react'
import Layout from '../Layout';
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <Layout>
      <div className="cv-breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cv-breadcrumb-box">
                <h1>Dashboard</h1>
                <ul>
                  <li><a href="index5.html">Home</a></li>
                  <li>Dashboard</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="spacer-top spacer-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="cv-feature-box">
                <div className="cv-feature-img">
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m0 141.356h422v30h-422z" /><path d="m422 102.356c0-24.813-20.187-45-45-45h-332c-24.813 0-45 20.187-45 45v9h422z" /><path d="m421 242.643c.334 0 .666.01 1 .013v-41.299h-422v123c0 24.813 20.187 45 45 45h255.138c-.089-1.894-.139-3.798-.139-5.713.001-66.721 54.281-121.001 121.001-121.001zm-346-11.286h37.5c8.284 0 15 6.716 15 15s-6.716 15-15 15h-37.5c-8.284 0-15-6.716-15-15s6.716-15 15-15zm85 77.999h-85c-8.284 0-15-6.716-15-15s6.716-15 15-15h85c8.284 0 15 6.716 15 15s-6.716 15-15 15z" /><path d="m421 272.643c-50.178 0-91 40.823-91 91 0 50.178 40.823 91 91 91s91-40.823 91-91-40.823-91-91-91zm43.607 83.277-36 36c-2.929 2.929-6.768 4.394-10.606 4.394s-7.678-1.464-10.606-4.394l-18.5-18.5c-5.858-5.858-5.858-15.355 0-21.213 5.857-5.858 15.355-5.858 21.213 0l7.894 7.894 25.394-25.394c5.857-5.858 15.355-5.858 21.213 0 5.855 5.858 5.855 15.355-.002 21.213z" /></g></svg>
                </div>
                <div className="cv-feature-text">
                  <Link className="fs-4 text-dark fw-bold" to="/my-orders">Your Orders</Link>
                  <p>100% safe and secure</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="cv-feature-box">
                <div className="cv-feature-img">
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m512 346.5c0-63.535156-36.449219-120.238281-91.039062-147.820312-1.695313 121.820312-100.460938 220.585937-222.28125 222.28125 27.582031 54.589843 84.285156 91.039062 147.820312 91.039062 29.789062 0 58.757812-7.933594 84.210938-23.007812l80.566406 22.285156-22.285156-80.566406c15.074218-25.453126 23.007812-54.421876 23.007812-84.210938zm0 0" /><path d="m391 195.5c0-107.800781-87.699219-195.5-195.5-195.5s-195.5 87.699219-195.5 195.5c0 35.132812 9.351562 69.339844 27.109375 99.371094l-26.390625 95.40625 95.410156-26.386719c30.03125 17.757813 64.238282 27.109375 99.371094 27.109375 107.800781 0 195.5-87.699219 195.5-195.5zm-225.5-45.5h-30c0-33.085938 26.914062-60 60-60s60 26.914062 60 60c0 16.792969-7.109375 32.933594-19.511719 44.277344l-25.488281 23.328125v23.394531h-30v-36.605469l35.234375-32.25c6.296875-5.761719 9.765625-13.625 9.765625-22.144531 0-16.542969-13.457031-30-30-30s-30 13.457031-30 30zm15 121h30v30h-30zm0 0" /></svg>
                </div>
                <div className="cv-feature-text">
                  <Link className="fs-4 text-dark fw-bold" to={"/my-appointments"}>Appointments</Link>
                  <p>By qualified Doctors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Dashboard