import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './ContactModal.css';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    city: '',
    state: '',
    country: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="modal-overlay">
        <motion.div 
          className="modal-content"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
          
          <div className="modal-header">
            <h2>Pronto para acelerar os seus <span className="text-primary">Resultados?</span></h2>
            <p>Preencha os dados abaixo e entramos em contato rapidinho.</p>
          </div>

          {/* O Formspree integration vai aqui substituindo action="SEU_LINK_AQUI" */}
          <form className="modal-form" action="https://formspree.io/f/SEU_CODIGO_AQUI" method="POST">
            <div className="form-row">
              <div className="form-group">
                <label>Nome Completo</label>
                <input type="text" name="name" required placeholder="Digite seu nome" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>E-mail Corporativo</label>
                <input type="email" name="email" required placeholder="Voce@empresa.com" onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>WhatsApp</label>
                <input type="tel" name="whatsapp" required placeholder="(00) 00000-0000" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>País</label>
                <input type="text" name="country" required placeholder="Brasil" onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Cidade</label>
                <input type="text" name="city" required placeholder="Sua cidade" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Estado (UF)</label>
                <input type="text" name="state" required placeholder="SP" onChange={handleChange} />
              </div>
            </div>

            <div className="form-group full-width">
              <label>Mensagem / Breve descrição do negócio</label>
              <textarea name="message" rows="4" required placeholder="Como podemos te ajudar a crescer?" onChange={handleChange}></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              Solicitar Contato
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
