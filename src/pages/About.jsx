const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-6 md:px-12">
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">About Me</h2>

      {/* Main Glass Card */}
      <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-10 max-w-4xl text-gray-200">
        
        {/* Introduction */}
        <p className="text-base md:text-lg leading-relaxed mb-6">
          Hey! 👋 I'm <span className="font-semibold text-white">Mursal Abbas</span>, a passionate 
          <span className="text-blue-400"> Front-End Web Developer</span> from 
          Mehrabpur, Sindh, Pakistan.  
          I love designing and developing beautiful, responsive, and modern web apps using 
          <span className="text-blue-400"> React JS</span> and <span className="text-blue-400">Tailwind CSS</span>.
        </p>

        {/* Mission / Goal */}
        <p className="text-base md:text-lg leading-relaxed mb-6">
          My goal is to become a skilled software engineer and build powerful, user-friendly websites that 
          not only look great but also perform efficiently. I enjoy solving real-world problems with clean 
          code and creativity.
        </p>

        {/* Education */}
        <div className="mt-8 mb-6">
          <h3 className="text-2xl font-semibold text-blue-400 mb-3">🎓 Education</h3>
          <p className="text-base md:text-lg">
            Currently studying in <span className="font-semibold">Class 10</span> under the 
            <span className="text-blue-400"> Sindh Textbook Board</span>.  
            Alongside academics, I’m focusing deeply on web development — learning HTML, CSS, 
            JavaScript, React JS, and building practical projects.
          </p>
        </div>

        {/* Hobbies / Interests */}
        <div className="mt-8 mb-6">
          <h3 className="text-2xl font-semibold text-blue-400 mb-3">⚡ Interests</h3>
          <p className="text-base md:text-lg">
            When I’m not coding, I’m probably at the gym 💪 or playing cricket 🏏.  
            I believe in maintaining both mental and physical discipline — balancing coding, 
            fitness, and daily routine to stay sharp and focused.
          </p>
        </div>

        {/* Personal Line */}
        <div className="mt-10 border-t border-gray-500/30 pt-4">
          <p className="text-sm md:text-base text-gray-400 italic">
            “Discipline, consistency, and passion — these are the roots of my growth.” 🌱
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
