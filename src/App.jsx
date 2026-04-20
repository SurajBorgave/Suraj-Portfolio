import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Code, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Globe
} from 'lucide-react';
import surajImg from './assets/suraj.jpeg';

// --- Real Data ---
const PROJECTS = [
  {
    id: 1,
    title: "ChatSpend – NLP Expense Tracker",
    desc: "A chatbot-powered financial manager that logs expenses via natural language queries. Features automated category detection and Google Sheets cloud sync.",
    tech: ["Javascript", "Dialogflow", "Google Apps Script", "Vercel"],
    link: "https://github.com/SurajBorgave/ChatSpend"
  },
  {
    id: 2,
    title: "Petrol Pump Management System",
    desc: "Enterprise-grade MERN application for fuel stations. Manages inventory, role-based staff logs, and real-time sales calculations with payment validation.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "#"
  },
  {
    id: 3,
    title: "Marketing Intelligence Hub",
    desc: "A BI platform transforming dataset findings into strategic insights, featuring multivariate predictive models and interactive campaign analytics.",
    tech: ["Python", "React", "D3.js", "Flask"],
    link: "#"
  }
];

const CERTIFICATES = [
  { id: 1, name: "Full Stack Development", issuer: "Technical Excellence Certification", date: "2024" },
  { id: 2, name: "Database Management (MySQL)", issuer: "NPTEL / Coursera", date: "2023" },
  { id: 3, name: "Object Oriented Programming in Java", issuer: "Software Skills Council", date: "2023" }
];

const EXPERIENCE = [
  { id: 1, role: "Full Stack Developer (Projects)", company: "Independent / Academic", duration: "2023 - Present" },
  { id: 2, role: "Software Intern", company: "Tech Solutions Hub", duration: "2024" }
];

const EDUCATION = [
  { id: 1, degree: "B.Tech in Computer Engineering", school: "Currently Pursuing (3rd Year)", year: "2024 - Present" },
  { id: 2, degree: "Diploma in Computer Engineering", school: "State Board of Technical Education", year: "2024 Graduated" }
];

const SKILLS = ["C", "C++", "Java", "Python", "MySQL", "VB.NET", "JavaScript", "React", "Node.js"];

// --- Components ---

const DigitalMatrix = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-[0.03]" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}>
    <div className="cyber-grid w-full h-full" style={{ width: '100%', height: '100%' }} />
    <div className="scanline" />
  </div>
);

const GlassConsole = () => (
  <div className="glass-card mono" style={{ 
    padding: '20px', fontSize: '0.8rem', color: 'var(--primary-tech)', 
    borderLeft: '4px solid var(--primary-tech)', background: 'rgba(0,0,0,0.4)',
    maxWidth: '400px'
  }}>
    <div style={{ opacity: 0.5, marginBottom: '10px' }}>// SYSTEM_STATUS_REPORT</div>
    <div>&gt; INITIALIZING NEURAL_GATES... <span style={{ color: 'white' }}>DONE</span></div>
    <div>&gt; SYNCING CLOUD_CORE... <span style={{ color: 'white' }}>OK</span></div>
    <div>&gt; DEPLOYING TECH_VUE... <span style={{ color: 'white' }}>ACTIVE</span></div>
    <div className="blink" style={{ width: '10px', height: '15px', background: 'var(--primary-tech)', display: 'inline-block', verticalAlign: 'middle', marginLeft: '5px' }}></div>
  </div>
);

const Navbar = () => (
  <nav className="navbar glass-card" style={{ 
    position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', 
    width: '90%', maxWidth: '1000px', display: 'flex', justifyContent: 'space-between', 
    padding: '15px 40px', zIndex: 1000, borderRadius: '40px' 
  }}>
    <div className="logo sans" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-tech)', letterSpacing: '2px' }}>SURAJ</div>
    <div className="links" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
      <a href="#about" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: '500' }}>About</a>
      <a href="#projects" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: '500' }}>Projects</a>
      <a href="#certs" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: '500' }}>Credentials</a>
      <a href="#contact" className="premium" style={{ padding: '8px 20px', fontSize: '0.8rem', textDecoration: 'none' }}>Contact</a>
    </div>
  </nav>
);

const App = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="portfolio-app">
      <DigitalMatrix />
      {/* Background Glow */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 242, 255, 0.05), transparent 80%)`
        }}
      />
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '100px' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h4 className="mono" style={{ color: 'var(--primary-tech)', letterSpacing: '4px', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem' }}>// Suraj Borgave</h4>
            <h1 className="section-title accent-text glitch-hover" style={{ fontSize: '5.5rem', lineHeight: '1', textAlign: 'left', marginBottom: '1.5rem' }}>
              Full-Stack <br /> Software Engineer
            </h1>
            <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '1.2rem', maxWidth: '500px', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
                  A visionary developer blending elite aesthetics with cutting-edge technical architecture.
                </p>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <button className="premium">View Source</button>
                  <button className="premium" style={{ borderColor: 'var(--text-muted)', color: 'var(--text-muted)' }}>Dev Log</button>
                </div>
              </div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <GlassConsole />
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Animated Background Element */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ 
            position: 'absolute', right: '-10%', top: '-20%', width: '600px', height: '600px', 
            borderRadius: '50%', background: 'radial-gradient(circle, var(--primary-tech-glow) 0%, transparent 70%)',
            filter: 'blur(80px)', zIndex: 1
          }} 
        />
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div className="glass-card" style={{ height: '500px', width: '100%', overflow: 'hidden' }}>
              <img src={surajImg} alt="Suraj" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
            </div>
            <div>
              <h2 className="section-title accent-text" style={{ textAlign: 'left', fontSize: '3rem' }}>The Developer</h2>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
                I am a passionate Computer Engineering student currently pursuing my B.Tech. With a strong foundation in C++, Java, and the MERN stack, I focus on building efficient, real-world solutions that solve complex problems.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="glass-card" style={{ padding: '20px' }}>
                  <h3 style={{ color: 'var(--primary-tech)' }}>50+</h3>
                  <p>Deployments</p>
                </div>
                <div className="glass-card" style={{ padding: '20px' }}>
                  <h3 style={{ color: 'var(--primary-tech)' }}>12+</h3>
                  <p>Technical Certs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" style={{ position: 'relative', zIndex: 2 }}>
        <div className="container">
          <h2 className="section-title accent-text">Featured Implementations</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {PROJECTS.map(proj => (
              <motion.div 
                key={proj.id}
                whileHover={{ scale: 1.02 }}
                className="glass-card"
                style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', overflow: 'hidden' }}
              >
                <div className="scanline" style={{ opacity: 0.05 }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Code color="var(--primary-tech)" size={32} />
                  <span className="mono" style={{ fontSize: '0.7rem', color: 'var(--primary-tech)', opacity: 0.6 }}>PROJ_ID::{proj.id.toString().padStart(3, '0')}</span>
                </div>
                <h3 className="sans" style={{ fontSize: '1.8rem' }}>{proj.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{proj.desc}</p>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {proj.tech.map(t => (
                    <span key={t} className="mono" style={{ fontSize: '0.7rem', padding: '4px 12px', border: '1px solid var(--glass-border)', borderRadius: '4px', background: 'rgba(212, 175, 55, 0.05)' }}>{t}</span>
                  ))}
                </div>
                <button className="premium mono" style={{ width: 'fit-content', padding: '8px 20px', fontSize: '0.7rem', gap: '10px', marginTop: 'auto' }}>
                  EXECUTE_LINK <ExternalLink size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS SECTION */}
      <section id="certs" style={{ position: 'relative', zIndex: 2 }}>
        <div className="container">
          <h2 className="section-title accent-text">Systems Credentials</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {CERTIFICATES.map(cert => (
              <motion.div 
                key={cert.id}
                whileHover={{ scale: 1.05 }}
                className="glass-card"
                style={{ padding: '30px', position: 'relative', overflow: 'hidden' }}
              >
                <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: 0.1 }}>
                  <Award size={100} color="var(--primary-tech)" />
                </div>
                <h3 className="sans" style={{ fontSize: '1.4rem', marginBottom: '10px' }}>{cert.name}</h3>
                <p style={{ color: 'var(--primary-tech)', fontWeight: 'bold' }}>{cert.issuer}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Issued: {cert.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE & EDUCATION */}
      <section style={{ position: 'relative', zIndex: 2 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
            <div>
              <h2 className="section-title accent-text" style={{ textAlign: 'left', fontSize: '2.5rem' }}>Experience</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {EXPERIENCE.map(exp => (
                  <div key={exp.id} className="glass-card" style={{ padding: '30px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <h3 className="sans" style={{ fontSize: '1.2rem' }}>{exp.role}</h3>
                      <span className="mono" style={{ color: 'var(--primary-tech)', fontWeight: 'bold', fontSize: '0.9rem' }}>{exp.duration}</span>
                    </div>
                    <p style={{ color: 'var(--text-muted)' }}>{exp.company}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="section-title accent-text" style={{ textAlign: 'left', fontSize: '2.5rem' }}>Education</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {EDUCATION.map(edu => (
                  <div key={edu.id} className="glass-card" style={{ padding: '30px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <h3 className="sans" style={{ fontSize: '1.2rem' }}>{edu.degree}</h3>
                      <span className="mono" style={{ color: 'var(--primary-tech)', fontWeight: 'bold', fontSize: '0.9rem' }}>{edu.year}</span>
                    </div>
                    <p style={{ color: 'var(--text-muted)' }}>{edu.school}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section style={{ position: 'relative', zIndex: 2 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title accent-text">Core Stack</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
            {SKILLS.map(skill => (
              <div key={skill} className="glass-card" style={{ padding: '15px 30px', borderRadius: '40px', fontWeight: 'bold', letterSpacing: '1px' }}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" style={{ position: 'relative', zIndex: 2, background: 'linear-gradient(to bottom, transparent, var(--bg-card))' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '80px', textAlign: 'center' }}>
            <h2 className="section-title accent-text">Initialize Connection</h2>
            <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 40px', color: 'var(--text-muted)' }}>
              Open for technical collaborations and architecture development. Send a ping.
            </p>
            <form style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input type="text" placeholder="Your Name" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', padding: '15px 25px', borderRadius: '10px', color: 'white', outline: 'none' }} />
              <input type="email" placeholder="Your Email" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', padding: '15px 25px', borderRadius: '10px', color: 'white', outline: 'none' }} />
              <textarea placeholder="Your Message" rows="5" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', padding: '15px 25px', borderRadius: '10px', color: 'white', outline: 'none' }}></textarea>
              <button className="premium mono" type="button" style={{ padding: '15px' }}>SEND PING</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ position: 'relative', zIndex: 2, padding: '50px 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div className="sans" style={{ fontSize: '2rem', fontWeight: 'bold', letterSpacing: '2px', color: 'var(--primary-tech)', marginBottom: '20px' }}>SURAJ</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '30px' }}>
            <Github color="var(--text-muted)" size={24} style={{ cursor: 'pointer' }} />
            <Linkedin color="var(--text-muted)" size={24} style={{ cursor: 'pointer' }} />
            <Globe color="var(--text-muted)" size={24} style={{ cursor: 'pointer' }} />
          </div>
          <p className="mono" style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>&copy; 2026 SURAJ. All Systems Operational.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
