import { useState } from "react";
import { Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-[#F6F4EF py-20">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="heading-section text-primary-foreground text-2xl font-Cormorant font-bold mb-4">Entre em contato</h2>
            <p className="text-body text-muted-foreground font-InterA">
             Tem dúvidas? Estamos aqui para ajudar. Envie-nos uma mensagem e responderemos o mais breve possível.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-small font-medium text-accent-foreground mb-2"
                >
                 Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-foreground border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                  placeholder="Seu Nome"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-small font-medium text-accent-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-foreground border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-small font-medium text-accent-foreground mb-2"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                className="w-full px-4 py-3 bg-foreground border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none"
                placeholder="Como podemos ajudá-lo?"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-terracotta py-2 px-4 text-foreground font-Inter rounded-2xl cursor-pointer inline-flex items-center gap-2 hover:bg-teal-950/80 transform hover:scale-105 transition-all duration-200"
              >
                <Send size={18} 
                className="text-foreground"
                />
              Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;