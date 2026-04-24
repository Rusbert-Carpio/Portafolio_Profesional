import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { skillGroups } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="section-pad skills">
      <SectionTitle
        badge="Stack"
        title="Tecnologías y herramientas"
        description="Stack orientado a construir aplicaciones reales, sistemas web y soluciones mantenibles."
      />

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <motion.div
            className="glass-card skill-card"
            key={group.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <h3>{group.title}</h3>
            <div className="skill-tags">
              {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
