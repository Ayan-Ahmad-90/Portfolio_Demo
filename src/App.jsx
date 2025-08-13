import React, { useRef, useState } from "react";
import "./App.css";

import Option from "./learn react/Option";
import Radio from "./learn react/Radio";
import LoginForm from "./learn react/LoginForm";
import Table from "./learn react/Table";
import Clock from "./learn react/Clock";
import { Alert , NavDropdown , Navbar , Nav , Container} from "react-bootstrap";
import { Button } from "react-bootstrap";


function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
}

function App() {

  const initialName = "Ahaan Pandey";
  const initialPhoto =
    "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20250717174405.jpg";
  const initialCount = 0;
  const initialLine = "⭐ The Face of Global Elegance – Ahaan Pandey";

  const [name, update] = useState(initialName);
  const [photoURL, setPhotoURL] = useState(initialPhoto);
  const [count, setCount] = useState(initialCount);
  const [headline, setheadline] = useState(initialLine);
  const [display, setDisplay] = useState(true);
  const [Email, setEmail] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [color, setColor] = useState("white");

  const addCandidate = (newCandidate) => {
    setCandidates([...candidates, { id: candidates.length + 1, ...newCandidate }]);
  };
const [showAlert, setShowAlert] = useState(false);

  const Title = "Hello everybody, let's introduce my new project!";

  const uploadimg = () => {
    setShowAlert(true);
    setTimeout(() => {
      setheadline(
        "🌟 Aneet Padda – Crowned as India’s Third Miss beautiful actor in india"
      );
      update("Aneet Padda");
      setPhotoURL(
        "https://i.ytimg.com/vi/bJH8pw3nbjo/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLBoP9vurLZknTi1d1M1qAa_XIqm0Q"
      );
      setShowAlert(false);

    }, 2000);
  };

  const resetAll = () => {
    update(initialName);
    setPhotoURL(initialPhoto);
    setColor("white");
    toggleTheme("dark-mode");
    setCount(initialCount);
    setheadline(initialLine);
    alert("All values reset!");
  };

  const sum = (a, b) => a + b;
  const value = (a, b, s) => {
    if (s === "+") return a + b;
    else if (s === "-") return a - b;
    else return a * b;
  };

  const fruits = ["apple", "mango", "Date", "guava"];

    const inputRef = useRef(null);

const HandleInput =() => {
  inputRef.current.classList.toggle("active");
  inputRef.current.style.color= "red";
  inputRef.current.style.backgroundColor = "yellow";
  inputRef.current.style.fontSize = "20px";
  inputRef.current.style.fontWeight = "bold";
  inputRef.current.style.border = "2px solid black";
  inputRef.current.style.padding = "10px";
  inputRef.current.style.borderRadius = "5px";
  inputRef.current.focus();
  inputRef.current.value = "Hello, this is a test input!";
  inputRef.current.placeholder = "Input has been modified!";
}

const toggleTheme =() => {
  if(inputRef.current.style.display != 'none') {
    inputRef.current.style.display = 'none'
  }else {
    inputRef.current.style.display = 'inline';
  }
}

  return (
    <>
      <Button onClick={toggleTheme} variant="dark">
      Toggle Theme
      </Button>
      <input type="text" ref={inputRef} placeholder="Enter your name...."/>
      {/* <div className="App"> */}
      <Button onClick={HandleInput} variant="success">Click here</Button>
      {/* </div> */}
      <br />
          <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://react-bootstrap.netlify.app/docs/components/navbar">Home</Nav.Link>
            <Nav.Link href="https://youtu.be/LuNPCSNr-nE?si=Oet7FJtXFrUTwevL">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Clock color={color} />
  
      {display ? <h2 style={{ color: "red" }}>{Title}</h2> : null}

      <h3>{headline}</h3>

      <div className="count">
        <h2>COUNT VALUE: {count}</h2>
        <h2>
          {{
            0: "condition 0",
            1: "condition 1",
            2: "condition 2",
            3: "condition 3",
            4: "condition 4",
            5: "condition 5",
          }[count] || "Condition pending....."}
        </h2>
      </div>

      <img src={photoURL} alt="Uploaded" className="user-img" />

      <h2 style={{ color: "#FFD700" }}>{name || "USER NAME NOT DEFINED"}</h2>

      <div className="mail">
        <input
          type="text"
          value={Email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your Address"
        />
        <button onClick={() => setEmail("")}>Clear-btn</button>
      </div> 
            {showAlert && (
  <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
    Uploading image in 2 seconds...
  </Alert>
)}

      <div className="btn">
        <Button onClick={uploadimg} variant="success">Image-gen-btn</Button>
        <Button onClick={() => setDisplay(!display)} variant="info">Toggle-btn</Button>
        <Button onClick={resetAll} variant="warning">Reset-btn</Button>
        <Button style={{color:"blue"}} variant="secondary">
        <select onChange={(e) => setColor(e.target.value)}>
          <option value="black">⏰Clock-color</option>
          <option value="#fdf4e3">🟠 Warm Cream</option>
          <option value="#4578a0">🔵 Blue-Gray</option>
          <option value="#b2512d">🟤 Rich Brown</option>
          <option value="#f7c784">🧡 Peach-Orange</option>
        </select>
        </Button>
        <Button onClick={toggleTheme} variant="danger">Toggle Theme</Button>
        <Button onClick={() => setCount(count + 1)} variant="primary">Update value</Button>
      </div>

      <p className="email-text">
        <b>{Email}</b>
      </p>

      {/* ✅ Form connected to state */}
      <LoginForm onSubmit={addCandidate} />

      {/* ✅ Table shows candidates */}
      <Table
  data={candidates}
  headings={["id", "username", "email", "password"]}
/>


      <Option />
      <Radio />

      <div className="create">
        <h2>practice question's.....</h2>
        <h2>{sum(2, 8)}</h2>
        <h2>{value(9, 4, "-")}</h2>
        <h2>{fruits[1]}</h2>
      </div>
    </>
  );
}

export default App;
