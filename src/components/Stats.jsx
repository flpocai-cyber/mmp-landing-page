import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function Counter({ value, duration = 2 }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      // Reset and start animation
      let startValue = 0;
      const controls = animate(startValue, value, {
        duration: duration,
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest));
        },
      });
      return () => controls.stop();
    } else {
      // Reset when out of view if we want it to replay
      setDisplayValue(0);
    }
  }, [isInView, value, duration]);

  // Formatação para milhar se necessário (ex: 1.000)
  const format = (val) => {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return <span ref={ref}>{format(displayValue)}</span>;
}

const statsData = [
  { target: 80, label: "Clientes Atendidos", suffix: "+" },
  { target: 8, label: "Anos no Mercado", suffix: "+" },
  { target: 1000, label: "Campanhas Criadas", suffix: "+" },
  { target: 200, label: "Identidades visuais elaboradas", suffix: "+" },
];

export default function Stats() {
  return (
    <section id="stats" className="stats-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Nossos <span className="text-primary">Números</span></h2>
          <p className="section-subtitle">Conheça um pouco mais sobre a MMP</p>
        </motion.div>

        <motion.div 
          className="stats-box"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <div className="stats-grid">
            {statsData.map((stat, idx) => (
              <div key={idx} className="stat-item">
                <div className="stat-number">
                  {stat.suffix}<Counter value={stat.target} />
                </div>
                <div className="stat-label">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
