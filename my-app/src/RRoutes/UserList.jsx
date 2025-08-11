import { Link } from "react-router-dom";

export default function UserList() {
    const userdata = [
        { id: 1, name: "Shivam" },
        { id: 2, name: "RAMA" },
        { id: 3, name: "RANA" },
        { id: 4, name: "SANA" },
        { id: 5, name: "BHANU" },
        { id: 6, name: "RAJN" }
    ];

    return (
        <div>
            <h1>User List page</h1>
            {userdata.map((item) => (
                <h2 key={item.id}>
                    <Link to={`/users/${item.id}`}>{item.name}</Link>
                </h2>
            ))}
        </div>
    );
}