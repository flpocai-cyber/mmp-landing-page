import { motion } from 'framer-motion';

export default function Clients() {
  return (
    <section id="clientes" style={{ padding: '6rem 0', background: 'transparent', overflow: 'hidden' }}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '4rem' }}
        >
          <h2 className="section-title">Confiam na <span className="text-primary">MMP</span></h2>
          <p className="section-subtitle">Conheça alguns de nossos clientes</p>
        </motion.div>
      </div>

      <div className="marquee-wrapper" style={{ position: 'relative', width: '100%' }}>
        <div className="marquee-container" style={{ margin: 0, paddingBottom: '2rem' }}>
          <div className="marquee-track clients-track">
            {/* Duplicamos a imagem da faixa de clientes para loop infinito */}
            <img 
              src="/clientestransp.png" 
              alt="Nossos Clientes" 
              style={{ height: '140px', width: 'auto', display: 'block' }} 
            />
            <img 
              src="/clientestransp.png" 
              alt="Nossos Clientes" 
              style={{ height: '140px', width: 'auto', display: 'block' }} 
            />
            <img 
              src="/clientestransp.png" 
              alt="Nossos Clientes" 
              style={{ height: '140px', width: 'auto', display: 'block' }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
