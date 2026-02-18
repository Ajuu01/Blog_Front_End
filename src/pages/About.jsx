import Navbar from "../components/Navbar";
import blogImg from '../assets/blog.png'

function About() {
  return (
    <>
      <Navbar />
      <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg p-8">
        <div className="text-center mt-10">
          <h1 className="text-4xl font-bold mb-4">About This Blog</h1>
          <p className="text-lg text-gray-700 mb-6">
            Welcome! This blog project is built using <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>. 
            It allows users to create, edit, and delete blogs, including uploading images for each blog post.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            The goal of this project is to demonstrate a full-stack CRUD application with a modern UI and file upload support. 
            You can view all blogs on the homepage, click on individual blogs, or even edit them if you have permission.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Technologies used:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Frontend: React, React Router, Tailwind CSS</li>
            <li>Backend: Node.js, Express, Multer</li>
            <li>Database: MongoDB with Mongoose</li>
            <li>File uploads handled with Multer</li>
          </ul>
          <p className="text-lg text-gray-700">
            Thank you for visiting! Feel free to explore and try editing a blog to see the full functionality.
          </p>
        </div>

        <div className="mt-10 text-center">
          <img 
            src={blogImg}
            alt="Blog Illustration"
            className="mx-auto rounded-lg shadow-lg"
            width="400"
          />
        </div>
      </div>
    </>
  );
}

export default About;
