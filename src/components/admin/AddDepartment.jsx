import React from 'react'
import Layout from '../Layout'

function AddDepartment() {
    return (
        <Layout>
            <div className="cv-breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cv-breadcrumb-box">
                                <h1>Add Department</h1>
                                <ul>
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li>Add Department</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cv-conatact spacer-top spacer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cv-contact-form">
                                <h2 className="cv-sidebar-title">Add Department</h2>
                                <form>
                                    <input type="text" placeholder="Department name" />

                                    <textarea
                                        name="description"
                                        placeholder="Enter Description...."
                                    ></textarea>

                                    <br />

                                    <button type="submit" className="cv-btn submitForm">Add Department</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AddDepartment