import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

export default function About() {
  return (
    <section id="about" className="section-pad about">
      <SectionTitle
        badge="Sobre mí"
        title="Construyo soluciones digitales con visión de producto."
        description="Mi enfoque combina código, diseño, rendimiento y utilidad real. No solo busco que una app funcione: busco que sea mantenible, clara y preparada para crecer."
      />

      <div className="about-grid">
        {[
          ['Mobile first', 'Experiencia en aplicaciones Android, flujos offline y funcionalidades enfocadas en productividad.'],
          ['Web systems', 'Desarrollo de sistemas web con roles, autenticación, bases de datos y arquitectura organizada.'],
          ['Product mindset', 'Pienso en publicación, monetización, mantenimiento, experiencia de usuario y evolución del proyecto.'],
        ].map(([title, text], index) => (
          <motion.article
            className="glass-card about-card"
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <span className="card-index">0{index + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
