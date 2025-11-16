import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-4rem)] px-4">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Hello, I'm Mursal Abbas</h2>
      <p className="text-sm md:text-lg mb-6 md:mb-8 max-w-md md:max-w-xl">
        I'm a front-end developer and coder, learning and creating amazing projects in React, JavaScript, and Tailwind CSS.
      </p>
      <Link
      to="/projects"
      className="bg-blue-500 hover:bg-blue-600 px-6 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-lg font-semibold transition duration-300"
      >
        View Projects
        </Link>
    </div>
  );
};

export default Home;
