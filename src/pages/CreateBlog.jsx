import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    description: "",
    image: null, // store as null initially
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    setData({
      ...data,
      [name]: name === "image" ? files[0] : value,
    });
  };

  const createBlog = async (e) => {
    e.preventDefault();

    // Use FormData to send file + text fields
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("subtitle", data.subtitle);
    formData.append("description", data.description);
    if (data.image) formData.append("image", data.image);

    try {
      const response = await axios.post(
        "https://mern-3-0-1.onrender.com/blog",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.status === 200 || response.status === 201) {
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong! Check console for details.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
        <div className="mt-10 text-center font-bold">
          Wanna Create a Blog?
        </div>
        <div className="mt-3 text-center text-4xl font-bold">Create a Blog</div>
        <form onSubmit={createBlog}>
          <div className="p-8">
            <div className="flex gap-4">
              <input
                type="text"
                name="title"
                placeholder="Title *"
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                onChange={handleChange}
              />
              <input
                type="text"
                name="subtitle"
                placeholder="Subtitle *"
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                onChange={handleChange}
              />
            </div>

            <div className="my-6 flex gap-4">
              <input
                type="file"
                name="image"
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                onChange={handleChange}
              />
            </div>

            <div>
              <textarea
                name="description"
                placeholder="Description *"
                className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-700"
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white"
              >
                Create Blog
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateBlog;
