import { Link } from "react-router-dom";

function Food() {
  return (
    <main>
      <center>
        <Link to={"/"}>
          <button
            style={{
              backgroundColor: "purple",
              padding: "1rem 2rem",
              borderRadius: "20px",
              marginTop: "2rem",
              cursor: "pointer",
            }}
          >
            GO HOME
          </button>
        </Link>
      </center>
      <center style={{ marginTop: "10rem", fontSize: "10rem" }}>
        <h1>THIS WILL BE FOOD!!</h1>
      </center>
    </main>
  );
}

export default Food;
