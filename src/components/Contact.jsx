import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSmartphone } from 'react-icons/fi';
import SectionTitle from './SectionTitle';
import { profile } from '../data/profile';

export default function Contact() {
  return (
    <section id="contact" className="section-pad contact">
      <SectionTitle
        badge="Contacto"
        title="Trabajemos en algo sólido."
        description="Puedes adaptar estos enlaces a tus perfiles reales cuando tengas tu CV, LinkedIn, GitHub y Play Store listos."
      />

      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
      >
        <a href={`mailto:${profile.email}`}><FiMail /> {profile.email}</a>
        <a href={profile.github} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
        <a href={profile.playStore} target="_blank" rel="noreferrer"><FiSmartphone /> Play Store</a>
      </motion.div>
    </section>
  );
}
