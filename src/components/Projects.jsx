import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import SectionTitle from './SectionTitle';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="section-pad projects">
      <SectionTitle
        badge="Proyectos"
        title="Trabajos seleccionados"
        description="Una selección de proyectos que demuestran desarrollo móvil, sistemas web, lógica de negocio y criterio técnico."
      />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: index * 0.09 }}
          >
            <div className="project-top">
              <span>{project.category}</span>
              <strong>0{index + 1}</strong>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="stack-list">
              {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
            </div>
            <div className="project-actions">
              <a href={project.links.repo} target="_blank" rel="noreferrer"><FiGithub /> Repo</a>
              <a href={project.links.demo} target="_blank" rel="noreferrer"><FiExternalLink /> Demo</a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
