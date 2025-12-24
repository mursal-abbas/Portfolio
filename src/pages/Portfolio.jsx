import React, { useState } from "react";
import myImg from "@/assets/myImg.jpg";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Code2,
  Sparkles,
  Target,
  ExternalLink,
  BookOpen,
  Facebook,
  Instagram,
  Globe,
  Send,
  Award, // Added for Certificates
} from "lucide-react";
import { portfolioData } from "../data/mock";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgb(71, 85, 105) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <div className="inline-block">
                <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Available for Projects
                </Badge>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-cyan-400">
                  {portfolioData.personal.name}
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 font-medium">
                {portfolioData.personal.role}
              </p>

              <p className="text-lg text-gray-500">
                {portfolioData.personal.tagline}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-6 text-base"
                  onClick={() =>
                    document
                      .getElementById("projects")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-700 hover:bg-slate-800 text-white px-6 py-6 text-base"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Contact Me
                </Button>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <a
                  href={portfolioData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={portfolioData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-3xl"></div>
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                  <img
                    src={myImg}
                    alt={portfolioData.personal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                About <span className="text-cyan-400">Me</span>
              </h2>
            </div>
            <Card className="bg-slate-800/50 border-slate-700 text-white">
              <CardContent className="p-8 space-y-8">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {portfolioData.about.description}
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-cyan-400">
                      <Sparkles className="w-5 h-5" />
                      <h3 className="font-semibold text-white">Interests</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {portfolioData.about.interests.map((interest, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-slate-700 text-gray-300"
                        >
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-cyan-400">
                      <Target className="w-5 h-5" />
                      <h3 className="font-semibold text-white">Goals</h3>
                    </div>
                    <ul className="space-y-2">
                      {portfolioData.about.goals.map((goal, i) => (
                        <li
                          key={i}
                          className="text-gray-400 text-sm flex items-start"
                        >
                          <span className="text-cyan-400 mr-2">•</span>
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-cyan-400">
                      <BookOpen className="w-5 h-5" />
                      <h3 className="font-semibold text-white">Education</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-300 font-medium">
                        {portfolioData.education.currentClass}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {portfolioData.education.board}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                My <span className="text-cyan-400">Skills</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-800/50 border-slate-700 md:col-span-2 text-white">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Code2 className="w-6 h-6 text-cyan-400" />
                    <CardTitle>Technical Skills</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                  {portfolioData.skills.mainSkills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-cyan-400">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-slate-700"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW CERTIFICATES SECTION --- */}
      <section id="certificates" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              My <span className="text-cyan-400">Certificates</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* JavaScript Certificate */}
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group text-white">
                <CardHeader>
                  <Award className="w-12 h-12 text-cyan-400 mb-4 mx-auto" />
                  <CardTitle className="text-2xl font-bold text-cyan-400">
                    JavaScript
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    Completed the{" "}
                    <a
                      href="https://www.coursera.org/learn/learn-javascript"
                      target="_blank"
                      className="text-cyan-400 font-semibold hover:underline"
                    >
                      Learn JavaScript
                    </a>{" "}
                    course by <strong>Scrimba</strong> on{" "}
                    <strong>Coursera</strong>. Mastered core JS, DOM
                    manipulation, and interactive apps.
                  </p>
                  <Button
                    asChild
                    className="rounded-full bg-cyan-500/10 border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all"
                  >
                    <a
                      href="https://coursera.org/share/9fe32dd5f58778752141a304abdba09b"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* React JS Certificate */}
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group text-white">
                <CardHeader>
                  <Award className="w-12 h-12 text-cyan-400 mb-4 mx-auto" />
                  <CardTitle className="text-2xl font-bold text-cyan-400">
                    React JS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    Completed the{" "}
                    <a
                      href="https://www.coursera.org/learn/learn-react"
                      target="_blank"
                      className="text-cyan-400 font-semibold hover:underline"
                    >
                      Learn React
                    </a>{" "}
                    course by <strong>Scrimba</strong> on{" "}
                    <strong>Coursera</strong>. Focused on hooks, props, and
                    modern development.
                  </p>
                  <Button
                    asChild
                    className="rounded-full bg-cyan-500/10 border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all"
                  >
                    <a
                      href="https://coursera.org/share/339de87dfee9b7fcf145066f2f0c9164"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-cyan-400">Projects</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-1 gap-6 max-w-5xl mx-auto">
            {portfolioData.projects.map((project) => (
              <Card
                key={project.id}
                className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group text-white"
              >
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} className="bg-slate-700 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-2">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="border-slate-700 hover:bg-slate-800 text-white"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Get In <span className="text-cyan-400">Touch</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-800/50 border-slate-700 text-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form
                    className="space-y-5 w-full"
                    action="https://formspree.io/f/myzlydyd"
                    method="POST"
                  >
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500"
                      placeholder="Your Name"
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-500"
                      placeholder="your@email.com"
                    />
                    <textarea
                      name="message"
                      required
                      rows="4"
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500"
                      placeholder="Message..."
                    ></textarea>
                    <Button
                      type="submit"
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-6"
                    >
                      <Send className="mr-2 w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <Card className="bg-slate-800/50 border-slate-700 text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Mail className="w-5 h-5 text-cyan-400" />
                      <a
                        href={`mailto:${portfolioData.personal.email}`}
                        className="hover:text-cyan-400 transition-colors"
                      >
                        {portfolioData.personal.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
