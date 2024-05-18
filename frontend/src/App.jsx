import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx"
import Category from "./pages/Category.jsx"
import NewBlog from "./pages/NewBlog.jsx" 
import Blog from "./components/Blog.jsx";

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/new" element={<NewBlog/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/blog" element={<Blog text="Hello i am blog 1" title="Blog 1" date="2024/05/18" author="Samith"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
