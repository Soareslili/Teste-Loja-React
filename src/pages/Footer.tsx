


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: "Todos os produtos", href: "#products" },
      { name: "Bolsas", href: "#categories" },
      { name: "Acessórios", href: "#accessories" },
      { name: "Cartões-presente", href: "#" },
    ],
    company: [
      { name: "Nossa História", href: "#about" },
      { name: "Artesanato", href: "#" },
      { name: "Sustentabilidade", href: "#" },
      { name: "Imprensa", href: "#" },
    ],
   
    legal: [
      { name: "Política de Privacidade", href: "#" },
      { name: "Termos de Serviço", href: "#" },
      { name: "Garantia", href: "#" },
    ],
  };

 

  return (
    <footer className="bg-foreground pt-16 pb-8">
      <div className="container-custom ml-8">
       
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <span className="font-serif text-2xl font-semibold text-primary-foreground">
           Aura Boutique
            </span>
            <p className="text-body text-muted-foreground mt-4 max-w-sm">
             Artigos de couro artesanais feitos com amor em São Francisco. Projetado para durar a vida toda.
            </p>
         
            
            
          </div>

         
          <div>
            <h4 className="text-small font-bold font-Inter text-accent-foreground uppercase tracking-wide mb-4">
           Comprar
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-small text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

         
          <div>
            <h4 className="text-small font-bold text-accent-foreground uppercase tracking-wide mb-4">
             Empresa
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-small text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

         

        
          <div>
            <h4 className="text-small font-bold text-accent-foreground uppercase tracking-wide mb-4">
             Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-small text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        
        <div className="border-t border-border pt-8 mr-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mr-8">
            <p className="text-small text-muted-foreground">
              © {currentYear} Artisan Leather Co. Todos os direitos reservados.
            </p>
            <p className="text-small text-muted-foreground">
            123 Craft Street, São Francisco, CA 94102 • contact@artisan.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;