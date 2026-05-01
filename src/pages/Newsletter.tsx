import { useState } from "react";
import { Mail } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section className="py-20 md:py-20 bg-[#221F1C]">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center mt-4">
          <Mail size={40} className="text-foreground/50 mx-auto mb-6" />
          <h2 className="heading-section text-3xl text-foreground mb-4">
            Fique por dentro
          </h2>
          <p className="text-body text-foreground/70 mb-8">
           Inscreva-se para receber acesso antecipado a novos produtos, ofertas exclusivas e histórias dos bastidores de nosso workshop.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3 bg-foreground/10 border border-foreground/20 rounded-full text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/30 transition-all duration-200"
              placeholder="Digite seu e-mail"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium cursor-pointer hover:bg-primary/90 transition-colors duration-200"
            >
              Inscreva-se
            </button>
          </form>
          <p className="text-small text-foreground/50 mt-4">
            Respeitamos sua privacidade. Você pode cancelar a inscrição a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;