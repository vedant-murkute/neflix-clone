import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage.jsx";
import Login from "./Login.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/netflix-clone/" element={<Login />}></Route>
        <Route path="/netflix-clone/homepage" element={<Homepage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
