import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Fábio",
    role: "Head Designer",
    image: "/fabio.jpg",
    desc: "Com mais de 30 anos no design gráfico e 8 anos liderando o digital. Seu repertório conta com mais de 100 cases de sucesso transformando identidades visuais em máquinas de conversão."
  },
  {
    name: "Miriam",
    role: "Especialista em Copywriting",
    image: "/miriam.jpg",
    desc: "Formada em Relações Públicas, domina a arte da persuasão. Cria textos estratégicos focados no posicionamento de marca que hipnotizam o seu público e aumentam vendas."
  },
  {
    name: "Giulia",
    role: "Tech & IA Solutions",
    image: "/giulia.jpg",
    desc: "Especialista em Tecnologia e Inteligência Artificial. Une algoritmos de inovação, análise pura de dados e automação tecnológica diretamente aplicados ao seu funil de marketing."
  }
];

export default function Team() {
  return (
    <section id="equipe" className="services" style={{ padding: '6rem 0', background: 'transparent' }}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">A Inteligência <span className="text-primary">Por Trás</span></h2>
          <p className="section-subtitle">O squad multidisciplinar preparado para escalar sua marca.</p>
        </motion.div>
        
        <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {teamMembers.map((member, index) => (
            <motion.div 
              className="service-card" 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <div 
                style={{
                  width: '120px', height: '120px', borderRadius: '50%', 
                  background: 'var(--color-bg-secondary)',
                  marginBottom: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden',
                  border: '3px solid var(--color-primary)',
                  boxShadow: '0 5px 15px rgba(238, 43, 41, 0.2)'
                }}
              >
                <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '1.4rem', margin: '0.5rem 0 0.2rem' }}>{member.name}</h3>
              <p style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{member.role}</p>
              <p style={{ fontSize: '0.95rem' }}>{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
