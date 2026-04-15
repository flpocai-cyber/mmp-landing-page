import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './Testimonials.css';

const depoimentos = [
  {
    nome: "Carlos Silva", empresa: "Tech Solutions",
    texto: "A MMP mudou o rumo das nossas vendas online. Saímos de zero para faturamentos múltiplos em apenas 3 meses de tráfego pago intenso.", rating: 5
  },
  {
    nome: "Juliana Mendes", empresa: "Clínica Bem-Estar",
    texto: "Design premium e estratégias de social media que convertem! O WhatsApp da nossa clínica não para de receber agendamentos novos.", rating: 5
  },
  {
    nome: "Ricardo Gomes", empresa: "E-commerce Express",
    texto: "Melhor investimento que fizemos. A equipe realmente entende de performance digital e leva nossa marca para outro nível.", rating: 5
  },
  {
    nome: "Mariana Souza", empresa: "Academia Focus",
    texto: "Atendimento ágil, criativos fora da curva. O número de alunos matriculados disparou desde o início do projeto com vocês.", rating: 5
  },
  {
    nome: "Eduardo Oliveira", empresa: "Oliveira Construções",
    texto: "Estávamos invisíveis na internet antes da MMP. Eles reestruturaram a identidade e agora somos autoridade regional.", rating: 5
  },
  {
    nome: "Fernanda Costa", empresa: "Gourmet Foods",
    texto: "As campanhas criadas pela MMP no Meta Ads nos salvaram em meses de baixa sazonalidade. Indico de olhos fechados!", rating: 5
  }
];

export default function Testimonials() {
  // Duplicamos o array de depoimentos para criar a ilusão de rolagem infinita.
  // Como a animação translada -50%, o usuário não vê recomeçar!
  const roloInfinito = [...depoimentos, ...depoimentos];

  return (
    <section id="depoimentos" className="testimonials-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '2rem' }}
        >
          <h2 className="section-title">O que dizem <span className="text-primary">nossos parceiros</span></h2>
          <p className="section-subtitle">Resultados reais de quem confiou na nossa excelência.</p>
        </motion.div>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-container">
          <div className="marquee-track">
            {roloInfinito.map((dep, idx) => (
              <div key={idx} className="testimonial-card">
                <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}>
                  {[...Array(dep.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="var(--color-primary)" color="var(--color-primary)" />
                  ))}
                </div>
                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: '#E0E0E0', lineHeight: "1.5" }}>
                  "{dep.texto}"
                </p>
                <div style={{ marginTop: 'auto' }}>
                  <h4 style={{ color: 'var(--color-text)', fontSize: '1.1rem' }}>{dep.nome}</h4>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>{dep.empresa}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
