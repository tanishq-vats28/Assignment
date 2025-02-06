import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <div
      className="container mt-5"
      style={{
        backgroundColor: "#87CEFA",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2 className="text-center text-white mb-4">Random User Profile</h2>
      {user && (
        <div className="row align-items-center justify-content-center">
          <div className="col-md-4 text-center">
            <div
              className="card p-3 shadow-sm"
              style={{ backgroundColor: "#f0f8ff" }}
            >
              <img
                src={user.picture.large}
                alt={user.name.first}
                className="rounded-circle border border-white img-fluid mx-auto d-block"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="card p-3 shadow-sm"
              style={{ backgroundColor: "#f0f8ff" }}
            >
              <h4 className="text-primary">
                {user.name.title} {user.name.first} {user.name.last}
              </h4>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p>
                <strong>Location:</strong> {user.location.city},{" "}
                {user.location.country}
              </p>
              <p>
                <strong>Username:</strong> {user.login.username}
              </p>
              <p>
                <strong>Age:</strong> {user.dob.age}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
