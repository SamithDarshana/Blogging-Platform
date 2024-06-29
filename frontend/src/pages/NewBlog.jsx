import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

const NewBlog = () => {
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [popup, setPopup] = useState({ show: false, message: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:4000/api/blog/`, {
        username,
        title,
        content,
        tags,
      });
      setPopup({
        show: true,
        message: "Blog post added successfully!",
        type: "success",
      });
      setTitle("");
      setContent("");
      setTags("");
      setUsername("");
    } catch (error) {
      console.log(error);
      setPopup({
        show: true,
        message: "Failed to add blog post.",
        type: "error",
      });
    } finally {
      setTimeout(() => setPopup({ ...popup, show: false }), 3000); // Hide popup after 3 seconds
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-5 pl-28 pr-28">
      <div className="w-full mx-auto mt-10 p-6 bg-slate-100 rounded-lg shadow-md flex flex-col items-center justify-center">
        <h1 className="text-teal-600 text-xl font-bold mb-4">
          Create New Blog Post
        </h1>
        {popup.show && <Popup message={popup.message} type={popup.type} />}
        <form className="w-11/12  ">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              User Name:{" "}
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-bold mb-2"
            >
              Title:{" "}
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label
              htmlFor="content"
              className="block text-gray-700 font-bold mb-2"
            >
              Content:
            </label>
            <textarea
              name="text"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="tags"
              className="block text-gray-700 font-bold mb-2"
            >
              Tags:{" "}
            </label>
            <input
              type="text"
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5"
              onClick={handleSubmit}
            >
              Create
            </button>
          </div>
        </form>
      </div>
      <Link to={"/"}>
        <button className="bg-custom-750 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5 ml-5">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

const Popup = ({ message, type }) => {
  return (
    <div
      className={`fixed top-4 right-4 p-4 rounded shadow-md z-50 ${
        type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
      }`}
    >
      {message}
    </div>
  );
};

Popup.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default NewBlog;
