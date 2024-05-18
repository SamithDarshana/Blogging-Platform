import PropTypes from "prop-types";
import { useState } from "react";

const Blog = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const displayText = String(props.text).length > 50 ? String(props.text).substring(0,300): props.text

  return (
    <div
      className="bg-gradient-to-br from-custom-800 to-custom-801 text-slate-800 
    p-2 w-full m-3 rounded-md"
    >
      {/* title */}
      <div className="flex justify-center">
        <div className="inline-flex justify-center items-center font-bold bg-slate-400 p-1 rounded-md">
          {props.title}
        </div>
      </div>

      {/* date and author */}
      <div className="flex justify-between font-light">
        {/* date */}
        <div>{props.date}</div>
        {/* author */}
        {/* likes */}
        <div>{props.likes}</div>
      </div>
      {/* content */}
      <div>
        {isExpanded ? props.text : displayText}
        <button onClick={toggleExpand} className="ml-3 text-sky-600 bg-amber-100 pl-1 pr-1 pt-0 pb-0 rounded">
          {isExpanded ? "Read less" : "Read more"}
        </button>
      </div>
    </div>
  );
};

Blog.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  likes: PropTypes.number,
};

export default Blog;
