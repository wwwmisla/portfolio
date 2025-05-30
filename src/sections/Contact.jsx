import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState("success");
    const [alertMessage, setAlertMessage] = useState("");
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
            // console.log(formData);
            await emailjs.send(
                "service_por9o64",
                "template_usd36tj",
                {
                    from_name: formData.name,
                    to_name: "Misla Wislaine",
                    from_email: formData.email,
                    to_email: "misla.wislaine.alves.710@ufrn.edu.br",
                    message: formData.message,
                },
                "kOUi3XFda_sBaZvVl"
            );
            setIsLoading(false);
            setFormData({ name: "", email: "", message: "" });
            showAlertMessage("success", "Sua mensagem foi enviada!");
        } catch (error) {
            setIsLoading(false);
            console.log(error)
            showAlertMessage("danger", "Algo deu errado!");
        }
    };

    return (
        <section className="relative flex items-center c-space section-spacing" id="contact">
            <Particles
                className="absolute inset-0 -z-50"
                quantity={100}
                ease={80}
                color={"#ffffff"}
                refresh
            />
            {showAlert && <Alert type={alertType} text={alertMessage} />}
            <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
                <div className="flex flex-col items-start w-full gap-5 mb-10">
                    <h2 className="text-heading">Bora bater um papo?</h2>
                    <p className="font-normal text-neutral-400">
                        Se você tem um projeto em mente - seja um app, sistema, ideia criativa ou qualquer solução tecnológica - adoraria ajudar a tornar isso realidade :)
                    </p>
                </div>
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="name" className="feild-label">Nome Completo</label>
                        <input type="text" name="name" id="name" className="field-input field-input-focus" placeholder="seu nome" autoComplete="name" required value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="field-label">E-mail</label>
                        <input type="email" name="email" id="email" className="field-input field-input-focus" placeholder="seuemail@email.com" autoComplete="email" required value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className="field-label">Mensagem</label>
                        <textarea name="message" id="message" rows="4" className="field-input field-input-focus" placeholder="escreva a sua mensagem..." autoComplete="message" required value={formData.message} onChange={handleChange} />
                    </div>
                    <button type="submit" className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation">{!isLoading ? "Enviar" : "Enviando..."}</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;