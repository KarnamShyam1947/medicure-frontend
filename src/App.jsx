import { Route, Routes } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import Login from "./components/auth/Login"
import Home from "./components/pages/Home"
import Shop from "./components/pages/Shop"
import About from "./components/pages/About"
import Services from "./components/pages/Services"
import Contact from "./components/pages/Contact"
import { ToastContainer } from "react-toastify"
import Logout from "./components/auth/Logout";
import NoMatch from "./components/pages/NoMatch";
import AddMedicine from "./components/medicine/AddMedicine";
import NoAccess from "./components/pages/NoAccess";
import ProductSingle from "./components/pages/ProductSingle";

function App() {

    return (
        <>
            <ToastContainer />

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="shop" element={<Shop />}></Route>
                <Route path="about" element={<About />}></Route>
                <Route path="service" element={<Services />}></Route>
                <Route path="contact" element={<Contact />}></Route>

                <Route path="medicine-details" element={<ProductSingle />}></Route>

                <Route path="add-medicine" element={<AddMedicine />}></Route>

                <Route path="login" element={<Login />}></Route>
                <Route path="logout" element={<Logout />}></Route>

                <Route path="error-403" element={<NoAccess />}></Route>
                <Route path="*" element={<NoMatch />}></Route>
            </Routes>
        </>
    )
}

export default App
