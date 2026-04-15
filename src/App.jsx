import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Header from './components/Header';
import Stats from './components/Stats';
import WhatsAppBtn from './components/WhatsAppBtn';
import ContactModal from './components/ContactModal';
import Team from './components/Team';
import Clients from './components/Projects';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Aumenta a velocidade nativa
    video.playbackRate = 1.6;
    video.play().catch(() => {});

    const handleScroll = () => {
      // Se voltar ao topo absoluto, reinicia o vídeo
      if (window.scrollY <= 0) {
        if (video.paused && video.currentTime > 0.5) { 
          video.currentTime = 0;
          video.play().catch(() => {});
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header />
      <WhatsAppBtn />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <main>
        {/* HERO SECTION - scroll scrubbed full-screen video, contido aqui */}
        <section id="inicio" className="hero hero-scroll" ref={heroRef} style={{ overflow: 'hidden' }}>
          {/* Vídeo de fundo cobrindo 100% */}
          <video
            ref={videoRef}
            src="/2.mp4"
            className="hero-video-bg"
            muted
            playsInline
            autoPlay
            preload="auto"
          />
          {/* Sem overlay: vídeo normal sem escurecimento */}

          {/* Conteúdo à DIREITA para não cobrir o logo central do vídeo */}
          <div className="hero-sticky-content">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="hero-title">
                Performace extrema para o seu <span className="text-primary">negócio digital.</span>
              </h1>
              <p className="hero-subtitle">
                Transformamos seguidores em clientes e visualizações em faturamento.
                Somos a MMP Creative Marketing, a agência parceira do seu crescimento.
              </p>
              <div className="hero-cta">
                <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">Começar agora</button>
                <a href="#servicos" className="btn btn-outline">Nossos serviços</a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* WRAPPER com fundo da imagem para todas as seções abaixo do hero */}
        <div className="sections-bg">

        {/* SERVICES SECTION */}
        <section id="servicos" className="services">
          <div className="container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">O que <span className="text-primary">Fazemos</span></h2>
              <p className="section-subtitle">Um ecossistema completo para escalar sua marca.</p>
            </motion.div>
            
            <div className="services-grid">
              {[
                { title: "Mídias Sociais & Conteúdo", icon: "/midias sociais.png", desc: "Posts, Vídeos e Copy que convertem. Um feed magnético aliado à gestão diária do seu relacionamento digital." },
                { title: "Identidade Visual & Design", icon: "/identidade.png", desc: "Design premium que eleva sua percepção de valor. Construímos marcas inesquecíveis e altamente atrativas." },
                { title: "Automação & Inteligência IA", icon: "/automacao.png", desc: "Soluções tecnológicas modernas. Aplicamos robôs e fluxos de atendimento para você vender 24h por dia." },
                { title: "Estratégias Digitais", icon: "/estrategia.png", desc: "Tráfego pago e planejamento comercial completo. Desenhamos o caminho exato do clique até a compra." }
              ].map((sub, index) => (
                <motion.div 
                  className="service-card" 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="service-icon">
                    <img src={sub.icon} alt={sub.title} style={{ width: '240px', height: '240px', objectFit: 'contain' }} />
                  </div>
                  <h3>{sub.title}</h3>
                  <p>{sub.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <Team />

        {/* CLIENTS BANNER SECTION */}
        <Clients />

        {/* NOSSOS NÚMEROS (Animated Stats) */}
        <Stats />

        {/* RESULTS CTA SECTION */}
        <section id="resultados" className="cta-section">
          <motion.div 
            className="container cta-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>Não seja apenas mais uma marca. Seja <span className="text-primary">referência.</span></h2>
            <p>Junte-se às dezenas de empresas que multiplicaram seu faturamento com a MMP.</p>
            <button onClick={() => setIsModalOpen(true)} className="btn btn-primary btn-lg">Quero multiplicar meus resultados</button>
          </motion.div>
        </section>
        <footer id="contato" className="footer">
          <div className="container footer-content">
            <div className="footer-brand">
              <img src="/logo.png" alt="MMP Logo" className="footer-logo" style={{ height: '60px' }} />
              <p>Creative Marketing</p>
            </div>
            <div className="footer-links">
              <a href="https://www.instagram.com/mmpcreativemkt/" target="_blank" rel="noreferrer" className="social-link">Instagram 📸</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} MMP Creative Marketing. Todos os direitos reservados.</p>
          </div>
        </footer>
        </div> {/* fim sections-bg */}
      </main>
    </>
  );
}

export default App;
