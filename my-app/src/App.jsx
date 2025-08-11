import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from './RRoutes/Home';
import Login from "./RRoutes/Login";
import Index from "./RRoutes/Index";
import Collage from "./API/Collage";
import UserList from "./RRoutes/UserList";
import UserDetails from "./RRoutes/UserDetails";

function App() {
    return (
        <BrowserRouter>
            <nav style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                padding: "1rem",
                backgroundColor: "#f8f9fa"
            }}>
                <Link to="/"><h1>Home</h1></Link>
                <Link to="/index"><h1>About</h1></Link>
                <Link to="/login"><h1>Login</h1></Link>
                <Link to="/collage"><h1>Collage</h1></Link>
                <Link to="/users"><h1>Users</h1></Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/index" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/collage" element={<Collage />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/users/:id" element={<UserDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;