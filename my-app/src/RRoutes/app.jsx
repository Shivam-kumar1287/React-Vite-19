import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from './RRoutes/Home';
import Login from "./RRoutes/Login";
import Index from "./RRoutes/Index";
import Collage from "./API/Collage";

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/"><h1>Home</h1></Link>
                <Link to="/index"><h1>About</h1></Link>
                <Link to="/login"><h1>Login</h1></Link>
                <Link to="/collage"><h1>Collage</h1></Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/index" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/collage" element={<Collage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
