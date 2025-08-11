import { Link, useParams } from "react-router-dom";

export default function UserDetails() {
    const { id } = useParams();
    return (
        <div>
            <h1>User Details page</h1>
            <h1>User Id Is: {id}</h1>
            <h2><Link to="/users">Back to Users</Link></h2>
        </div>
    );
}