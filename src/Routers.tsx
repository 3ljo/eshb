import { Navigate, Route, Routes } from "react-router-dom";
import Home1 from "./pages/homePages/Home1";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home1 />}></Route>
                <Route path='*' element={<Navigate to='/' replace />}></Route>
            </Routes>
        </>
    );
};

export default Routers;
