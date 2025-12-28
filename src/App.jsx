// App.jsx - SIMPLER VERSION
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Layouts/Navigation';
import './App.css';

// Create simple page components directly in App.jsx
const Home = () => (
  <div className="page-container">
    <section className="hero-section min-h-[80vh] flex items-center justify-center">
      <div className="text-center max-w-4xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="text-gradient">SHIVANSHU RAWAT</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Full-Stack Developer  • Problem Solver 
        </p>
       <div className="flex flex-col gap-4 md:gap-6">
  <a href="/projects" className="btn btn-primary">
    View My Work
  </a>
  <a href="/contact" className="btn btn-outline">
    Contact Me
  </a>
</div>
      </div>
    </section>
  </div>
);

const About = () => (
  <div className="page-container">
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About Me</h1>
      <div className="max-w-3xl mx-auto glass p-8 rounded-2xl">
        <p className="text-lg text-gray-300 mb-4">
          I'm a passionate full-stack developer with expertise in modern web technologies. 
          I love creating beautiful, functional applications that solve real-world problems.
        </p>
        <p className="text-lg text-gray-300">
          With a keen eye for design and a strong foundation in computer science, 
          I bring ideas to life through clean code and innovative solutions.
        </p>
      </div>
    </div>
  </div>
);

const Projects = () => (
  <div className="page-container">
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">My Projects</h1>
      <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
        Here are some of my recent works. Each project showcases different skills and technologies.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* You can render your ProjectCard components here */}
        <div className="project-card">
          <h3>E-Commerce Platform</h3>
          <p>Full-featured online shopping platform</p>
        </div>
        <div className="project-card">
          <h3>Task Manager</h3>
          <p>Productivity app with drag & drop</p>
        </div>
        <div className="project-card">
          <h3>Weather Dashboard</h3>
          <p>Real-time weather application</p>
        </div>
      </div>
    </div>
  </div>
);

const Skills = () => (
  <div className="page-container">
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Skills & Technologies</h1>
      <div className="max-w-4xl mx-auto">
        {/* Your Skills component will render here */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-list">
              <span className="tech-tag">React</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">Tailwind CSS</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skill-list">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express</span>
              <span className="tech-tag">MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="page-container">
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Contact Me</h1>
      <div className="max-w-2xl mx-auto">
        {/* Your ContactForm component will render here */}
        <form className="space-y-6">
          <div>
            <label className="form-label">Name</label>
            <input type="text" className="form-input" />
          </div>
          <div>
            <label className="form-label">Email</label>
            <input type="email" className="form-input" />
          </div>
          <div>
            <label className="form-label">Message</label>
            <textarea className="form-input form-textarea"></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Redirect any unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;