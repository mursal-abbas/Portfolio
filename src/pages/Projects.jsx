const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-6 md:px-12 text-gray-200">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-blue-400">Projects</h2>

      <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-10 max-w-6xl space-y-10">
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          {/* Todo App */}
          <div className="flex-1 bg-gradient-to-br from-[#1C2833] to-[#223344] p-8 rounded-2xl shadow-lg hover:shadow-blue-900/30 border border-gray-700 hover:scale-105 transition duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-3">Todo App</h3>
            <p className="text-gray-300 text-sm md:text-base mb-5">
              A simple and elegant dark-themed Todo app to add, delete, and manage daily tasks efficiently.
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap justify-center gap-3 text-sm mb-6">
              <span className="bg-blue-400/20 px-4 py-1 rounded-full">HTML</span>
              <span className="bg-blue-400/20 px-4 py-1 rounded-full">CSS</span>
              <span className="bg-blue-400/20 px-4 py-1 rounded-full">JavaScript</span>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/mursal-abbas/Todo-App"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-blue-500/20 border border-blue-400 rounded-full text-sm md:text-base hover:bg-blue-500/30 hover:scale-105 transition duration-300"
              >
                View Code
              </a>
              <a
                href="https://mursal-abbas.github.io/Todo-App/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-blue-500/20 border border-blue-400 rounded-full text-sm md:text-base hover:bg-blue-500/30 hover:scale-105 transition duration-300"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Recipe App */}
          <div className="flex-1 bg-gradient-to-br from-[#1C2833] to-[#223344] p-8 rounded-2xl shadow-lg hover:shadow-blue-900/30 border border-gray-700 hover:scale-105 transition duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-3">Recipe App</h3>
            <p className="text-gray-300 text-sm md:text-base mb-5">
              A modern recipe application with a stylish dark UI for exploring delicious dishes easily.
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap justify-center gap-3 text-sm mb-6">
              <span className="bg-blue-400/20 px-4 py-1 rounded-full">HTML</span>
              <span className="bg-blue-400/20 px-4 py-1 rounded-full">CSS</span>
              <span className="bg-blue-400/20 px-4 py-1 rounded-full">JavaScript</span>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/mursal-abbas/Recipe-App"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-blue-500/20 border border-blue-400 rounded-full text-sm md:text-base hover:bg-blue-500/30 hover:scale-105 transition duration-300"
              >
                View Code
              </a>
              <a
                href="https://mursal-abbas.github.io/Recipe-App/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-blue-500/20 border border-blue-400 rounded-full text-sm md:text-base hover:bg-blue-500/30 hover:scale-105 transition duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
