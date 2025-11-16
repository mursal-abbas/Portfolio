import { useState } from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [activeTab, setActiveTab] = useState("email");

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 md:px-12 text-gray-200">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-blue-400">Contact</h2>

      {/* Slider Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveTab("email")}
          className={`px-6 py-2 rounded-full font-semibold transition ${
            activeTab === "email"
              ? "bg-blue-500/30 border border-blue-400"
              : "bg-[#1C2833] border border-gray-700 hover:bg-blue-500/20"
          }`}
        >
          Email
        </button>
        <button
          onClick={() => setActiveTab("social")}
          className={`px-6 py-2 rounded-full font-semibold transition ${
            activeTab === "social"
              ? "bg-blue-500/30 border border-blue-400"
              : "bg-[#1C2833] border border-gray-700 hover:bg-blue-500/20"
          }`}
        >
          Social Media
        </button>
      </div>

      {/* Slider Content */}
      <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl shadow-lg">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform:
              activeTab === "email" ? "translateX(0%)" : "translateX(-100%)",
          }}
        >
          {/* Email Form */}
          <div className="flex-shrink-0 w-full bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-2xl flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-blue-400 mb-3">Email Me</h3>
            <form
              className="space-y-5 w-full max-w-md"
              action="https://formspree.io/f/myzlydyd"
              method="POST"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-[#1C2833] border border-gray-700 rounded-xl focus:outline-none focus:border-blue-400 text-gray-200"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-[#1C2833] border border-gray-700 rounded-xl focus:outline-none focus:border-blue-400 text-gray-200"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-2 bg-[#1C2833] border border-gray-700 rounded-xl focus:outline-none focus:border-blue-400 text-gray-200 resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-2 bg-blue-500/20 border border-blue-400 rounded-full text-sm md:text-base hover:bg-blue-500/30 hover:scale-105 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

                {/* Social Media */}
        <div className="flex-shrink-0 w-full max-h-50 bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-2xl grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
        {/* LinkedIn */}
        <a
            href="https://www.linkedin.com/in/mursal-abbas-8b5710369"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center gap-1 hover:bg-gray-700/30 rounded-full p-2 transition duration-300"
        >
            <FaLinkedin size={28} className="text-blue-400" />
            <span className="text-gray-400 text-xs">mursal-abbas</span>
        </a>

        {/* GitHub */}
        <a
            href="https://github.com/mursal-abbas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center gap-1 hover:bg-gray-700/30 rounded-full p-2 transition duration-300"
        >
            <FaGithub size={28} className="text-gray-300" />
            <span className="text-gray-400 text-xs">mursal-abbas</span>
        </a>

        {/* Facebook */}
        <a
            href="https://facebook.com/itz.mursal.abbas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center gap-1 hover:bg-blue-700/30 rounded-full p-2 transition duration-300"
        >
            <FaFacebook size={28} className="text-blue-600" />
            <span className="text-gray-400 text-xs">itz.mursal.abbas</span>
        </a>

        {/* Instagram */}
        <a
            href="https://instagram.com/itz.mursal.abbas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center gap-1 hover:bg-pink-500/30 rounded-full p-2 transition duration-300"
        >
            <FaInstagram size={28} className="text-pink-500" />
            <span className="text-gray-400 text-xs">itz.mursal.abbas</span>
        </a>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
