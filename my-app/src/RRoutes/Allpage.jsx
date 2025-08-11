import { Link, Route, Routes } from "react-router-dom";
import Home from './Home';
import Login from "./Login";
import Index from "./Index";

function AllPage() {
    return (
        <>
            <nav>
                <Link to="/"><h1>Home</h1></Link>
                <Link to="/index"><h1>About</h1></Link>
                <Link to="/login"><h1>Login</h1></Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/index" element={<Index />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
}

export default AllPage;
