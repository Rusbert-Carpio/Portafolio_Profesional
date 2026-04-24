import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const timeline = [
  {
    year: 'Actualidad',
    title: 'Mobile & Web Development',
    text: 'Construcción de aplicaciones móviles y sistemas web con enfoque en arquitectura, monetización y experiencia de usuario.',
  },
  {
    year: '2026',
    title: 'Publicación y mejora de productos digitales',
    text: 'Optimización de una app PDF para Android con flujos offline, publicidad, compras y mejoras visuales.',
  },
  {
    year: 'Formación',
    title: 'Software Engineering Practice',
    text: 'Proyectos académicos y personales aplicando programación orientada a objetos, bases de datos, patrones y documentación.',
  },
];

export default function Experience() {
  return (
    <section className="section-pad experience">
      <SectionTitle
        badge="Ruta"
        title="Experiencia y evolución"
        description="Un resumen editable para mostrar tu crecimiento profesional, proyectos y enfoque como desarrollador."
      />

      <div className="timeline">
        {timeline.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={item.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <span>{item.year}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
