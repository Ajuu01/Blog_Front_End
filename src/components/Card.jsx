import { Link } from "react-router-dom";

function Card({blog}) {
  return (
    <Link to={`/blog/${blog._id}`}>
      <div className="flex  px-3 py-3">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          {/* Image */}
          <img
            className="w-full h-48 object-cover"
            src={"https://mern-3-0-1.onrender.com/"+blog.image}
            alt="Sunset in the mountains"
          />

          {/* Content */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{blog.title}:{blog.subtitle}</div>
            <p className="text-gray-700 text-base">{blog.description}</p>
          </div>

          {/* Tags */}
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #winter
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
