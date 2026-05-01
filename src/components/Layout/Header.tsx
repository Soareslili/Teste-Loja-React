import { useEffect, useState } from "react";


import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";



const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const { totalItems, openCart } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Produtos', href: '/products' },
        { name: 'Sobre', href: '/about' },
        { name: 'Contato', href: '/contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-destructive-foreground/95 backdrop-blur-md shadow-soft"
          : "bg-destructive-foreground"
      }`}>
          <div className="container-custom">
        <div className="flex items-center justify-around h-16 md:h-20">
          
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenu(!isMobileMenu)}
          >
            {isMobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>

        
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-small text-background cursor-pointer hover:text-ring transition-colors duration-200 tracking-wide uppercase"
              >
                {link.name}
              </Link>
            ))}
          </nav>

       
          <Link to="/" className="flex items-center justify-center">
            <span className="font-serif text-2xl md:text-3xl font-semibold text-background tracking-tight">
            Aura Boutique
            </span>
          </Link>

    
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.slice(2, 4).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-small text-background cursor-pointer hover:text-ring transition-colors duration-200 tracking-wide uppercase"
              >
                {link.name}
              </Link>
            ))}
          </nav>

        
          <div className="flex items-center gap-4">
            
            <button 
              onClick={openCart}
              className="p-2 text-background cursor-pointer hover:text-ring transition-colors relative"
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

    
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background border-t border-border transition-all duration-300 ${
          isMobileMenu
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col py-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="px-6 py-3 text-small text-muted-foreground hover:text-foreground hover:bg-muted transition-colors tracking-wide uppercase"
              onClick={() => setIsMobileMenu(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
        </header>
    );
};

export default Header;