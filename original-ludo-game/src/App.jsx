// import logo from "./logo.svg";
import "./App.css";
import Main from "./components/main/Main";
import HomePage from "./components/homepage/HomePage";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/playLudo" element={<Main/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
