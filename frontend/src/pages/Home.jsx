import { useEffect, useState } from "react";
import axios from "axios";
import TopBar from "../components/TopBar";
import Blog from "../components/Blog";

const Home = () => {
  const [blog, setBlog] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/blog/getblogs");
        setBlog(res.data);
        console.log(res);
        console.log(blog);
      } catch (err) {
        setError(err.res ? err.res.data : "Error occured fetching data");
      }
    };
    fetchBlogs();
  },[]);

  if (error) {
    return { error };
  }
  if (!blog) {
    return "Loading...";
  }

  return (
    <>
      <TopBar />
      <div className="flex flex-col justify-center items-center">
        <h1 className="mt-10 mb-4 font-bold text-blue-950 text-2xl">Blog Posts</h1>
        <ul>
          {blog.map((blog) => (
            <li key={blog.post_id}>
              <Blog
                title={blog.title}
                text={blog.content}
                date={blog.updated_at}
                likes={blog.likes}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
