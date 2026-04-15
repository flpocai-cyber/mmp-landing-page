import { MessageCircle } from 'lucide-react';
import './WhatsAppBtn.css';

export default function WhatsAppBtn() {
  return (
    <a 
      href="https://wa.me/5500000000000" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-float"
      title="Fale no WhatsApp"
    >
      <div className="whatsapp-pulse"></div>
      <MessageCircle size={32} />
    </a>
  );
}
