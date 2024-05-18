import PropTypes from "prop-types";

const Blog = (props) => {
  return (
    <div
      className="bg-gradient-to-br from-custom-500 to-custom-600 text-slate-800 
    p-2 w-full"
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
        <div>{props.author}</div>
      </div>
      {/* content */}
      <div>{props.text}</div>
    </div>
  );
};

Blog.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Blog;
