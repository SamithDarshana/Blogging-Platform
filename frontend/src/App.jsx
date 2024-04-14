import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import TopBar from "./components/TopBar.jsx";
import SearchBar from "./components/SearchBar.jsx";

function App() {
  return (
    <BrowserRouter>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchBar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
