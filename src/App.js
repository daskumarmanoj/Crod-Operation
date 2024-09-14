import "./App.css";
import Createe from "./components/Createe";
import { Route, Routes } from "react-router-dom";
import Read from "./components/Read";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Read />}></Route>
        <Route exact path="/create" element={<Createe />}></Route>
        <Route exact path="/edit" element={<Edit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
