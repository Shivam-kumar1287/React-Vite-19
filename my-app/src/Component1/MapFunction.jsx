import UserMapFunction from "./UserMapFunction"; // Make sure the path is correct

function MapFunction() {
  const userName = ["Shivamiva", "hhgf", "hkglk", "u;oug", "uuh;jgh;"];
  const userData = [
    {
      name: "Anil",
      age: "20",
      email: "anil@gmail.com",
      phone: 1234567890,
      id: 1
    },
    {
      name: "hhgf",
      age: "20",
      email: "hhghd@gmail.com",
      phone: 1234567890,
      id: 2
    },
    {
      name: "hkglk",
      age: "11",
      email: "anil@gmail.com",
      phone: 1234567890,
      id: 3
    }
  ];

  return (
    <div>
      <h1>Map Function</h1>
      <table border="2">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <h1>Reuse User Component</h1>
      {userData.map((user) => (
        <UserMapFunction key={user.id} user={user} />
      ))}
    </div>
  );
}

export default MapFunction;