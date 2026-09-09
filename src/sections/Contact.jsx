import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Alert from '../components/Alert';
import { Particles } from '../components/Particles';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'service_por9o64',
        'template_usd36tj',
        {
          from_name: formData.name,
          to_name: 'Misla Wislaine',
          from_email: formData.email,
          to_email: 'misla.wislaine.alves.710@ufrn.edu.br',
          message: formData.message,
        },
        'kOUi3XFda_sBaZvVl'
      );
      setIsLoading(false);
      setFormData({ name: '', email: '', message: '' });
      showAlertMessage('success', 'Sua mensagem foi enviada com sucesso!');
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage('danger', 'Algo deu errado! Tente novamente.');
    }
  };

  return (
    <section
      className="relative flex items-center justify-center c-space section-spacing"
      id="contact"
    >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={'#d1b187'}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="flex flex-col items-center justify-center w-full max-w-lg p-6 md:p-8 mx-auto border border-[#a67246]/20 rounded-2xl bg-primary shadow-2xl relative backdrop-blur-md">
        {/* Cabeçalho do Card */}
        <div className="flex flex-col items-start w-full gap-2 mb-8">
          <span className="text-xs uppercase tracking-widest text-[#a67246] font-semibold">
            Conexão Direta
          </span>
          <h2 className="text-heading text-[#e4d8c5]">Bora bater um papo?</h2>
          <p className="text-sm md:text-base text-[#d1b187]/80 text-pretty">
            Se você tem um projeto em mente — seja um app, sistema corporativo,
            ideia criativa ou solução tecnológica — adoraria ajudar a tornar
            isso realidade :)
          </p>
        </div>

        {/* Formulário */}
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label text-[#e4d8c5]">
              Nome Completo
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="field-input field-input-focus text-[#e4d8c5]"
              placeholder="seu nome"
              autoComplete="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="field-label text-[#e4d8c5]">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="field-input field-input-focus text-[#e4d8c5]"
              placeholder="seuemail@email.com"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="field-label text-[#e4d8c5]">
              Mensagem
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              className="field-input field-input-focus text-[#e4d8c5] resize-none"
              placeholder="escreva a sua mensagem..."
              autoComplete="off"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 text-base font-semibold text-center text-[#e4d8c5] bg-gradient-to-r from-[#a67246] to-[#724928] hover:from-[#c27a3c] hover:to-[#a67246] rounded-lg shadow-lg cursor-pointer hover-animation transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
