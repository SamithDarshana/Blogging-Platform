import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx"
import Category from "./pages/Category.jsx"
import NewBlog from "./pages/NewBlog.jsx"
import TopBar from "./components/TopBar.jsx"; 

function App() {
  return (
    <BrowserRouter>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/new" element={<NewBlog/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
