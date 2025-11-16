const Certificates = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-6 md:px-12 text-gray-200">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-blue-400">Certificates</h2>

      <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-10 max-w-6xl space-y-10">
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          
          {/* JavaScript Certificate */}
          <div className="flex-1 bg-gradient-to-br from-[#1C2833] to-[#223344] p-8 rounded-2xl shadow-lg hover:shadow-blue-900/30 border border-gray-700 hover:scale-105 transition duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-3">JavaScript</h3>
            <p className="text-gray-300 text-sm md:text-base mb-6">
              Completed the{" "}
              <a href="https://www.coursera.org/learn/learn-javascript" target="_blank" className="text-blue-400 font-semibold hover:underline">
                Learn JavaScript
              </a>{" "}
              course by <span className="font-semibold">Scrimba</span> on{" "}
              <span className="font-semibold">Coursera</span>, learning core JS concepts, DOM manipulation, and interactive web app development.
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
              <a
                href="https://coursera.org/share/9fe32dd5f58778752141a304abdba09b"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-blue-500/20 border border-blue-400 rounded-full text-sm md:text-base hover:bg-blue-500/30 hover:scale-105 transition duration-300"
              >
                View Certificate
              </a>
            </div>
          </div>

          {/* React JS Certificate */}
          <div className="flex-1 bg-gradient-to-br from-[#1C2833] to-[#223344] p-8 rounded-2xl shadow-lg hover:shadow-blue-900/30 border border-gray-700 hover:scale-105 transition duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-3">React JS</h3>
            <p className="text-gray-300 text-sm md:text-base mb-6">
              Completed the{" "}
              <a href="https://www.coursera.org/learn/learn-react" target="_blank" className="text-blue-400 font-semibold hover:underline">
                Learn React
              </a>{" "}
              course by <span className="font-semibold">Scrimba</span> on{" "}
              <span className="font-semibold">Coursera</span>, gaining hands-on experience with components, props, hooks, and modern React app development.
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
              <a
                href="https://coursera.org/share/339de87dfee9b7fcf145066f2f0c9164"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-blue-500/20 border border-blue-400 rounded-full text-sm md:text-base hover:bg-blue-500/30 hover:scale-105 transition duration-300"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
