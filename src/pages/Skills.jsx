const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-6 md:px-12">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-blue-400">Skills</h2>

      {/* Main container */}
      <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-10 max-w-5xl text-gray-200 space-y-10">

        {/* Row 1 */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <div className="flex-1 bg-gradient-to-br from-[#1C2833] to-[#223344] p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-700 hover:scale-105">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-3">HTML</h3>
            <p className="text-gray-300 text-sm md:text-base">
              Markup language to structure web content and pages.
            </p>
          </div>

          <div className="flex-1 bg-gradient-to-br from-[#1C2833] to-[#223344] p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-700 hover:scale-105">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-3">CSS</h3>
            <p className="text-gray-300 text-sm md:text-base">
              Styling language for layouts, colors, and designs.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <div className="flex-1 bg-gradient-to-br from-[#1C2833] to-[#223344] p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-700 hover:scale-105">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-3">JavaScript</h3>
            <p className="text-gray-300 text-sm md:text-base">
              Programming language to make websites interactive.
            </p>
          </div>

          <div className="flex-1 bg-gradient-to-br from-[#1C2833] to-[#223344] p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-700 hover:scale-105">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-3">React JS</h3>
            <p className="text-gray-300 text-sm md:text-base">
              JavaScript library for building dynamic UI components.
            </p>
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <div className="flex-1 bg-gradient-to-br from-[#1C2833] to-[#223344] p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-700 hover:scale-105">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-3">Tailwind CSS</h3>
            <p className="text-gray-300 text-sm md:text-base">
              Utility-first CSS framework for fast styling.
            </p>
          </div>

          <div className="flex-1 bg-gradient-to-br from-[#1C2833] to-[#223344] p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-700 hover:scale-105">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-3">Git & GitHub</h3>
            <p className="text-gray-300 text-sm md:text-base">
              Version control and platform for collaboration and hosting.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
