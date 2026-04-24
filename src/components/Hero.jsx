import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload, FiExternalLink } from 'react-icons/fi';
import { profile, stats } from '../data/profile';
import TypingName from './TypingName';

export default function Hero() {
  return (
    <section id="home" className="hero section-pad">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="eyebrow"><span></span>{profile.role}</div>
          <h1>
            <TypingName text={profile.name} />
          </h1>
          <h2>{profile.subtitle}</h2>
          <p>{profile.summary}</p>

          <div className="hero-actions">
            <a className="btn primary" href={profile.cv} download>
              <FiDownload /> Descargar CV
            </a>
            <a className="btn secondary" href="#projects">
              <FiExternalLink /> Ver proyectos
            </a>
          </div>

          <div className="hero-links">
            <a href={profile.github} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <div className="avatar-card">
            <div className="avatar-glow"></div>
            <img src={profile.avatar} alt="Avatar profesional" />
            <div className="terminal-card">
              <div className="terminal-dots"><span></span><span></span><span></span></div>
              <code>const developer = &#123; focus: 'software', mindset: 'product' &#125;;</code>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="stats-row">
        {stats.map((item) => (
          <motion.div
            className="stat-card"
            key={item.label}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          >
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
