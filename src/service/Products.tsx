import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "../Context/CartContext"; 
import type { Product } from "../types/product";

interface ProductProps {
  products: Product[];
  onProductClick: (product: Product) => void;
  showViewAll?: boolean;
}

export function Products({ products, onProductClick, showViewAll = false }: ProductProps) {
  const { addItem } = useCart(); 

  return (
    <section id="products" className="bg-foreground/5 py-20 mt-4">
      <div className="container-custom px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-Cormorant text-accent-foreground mb-4">
            Confira nossa linha
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            Nossas mais novas criações, prontas para se tornarem sua companhia diária.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(showViewAll ? products : products.slice(0, 3)).map((product, index) => (
            <div
              key={product.productId}
              className="bg-popover-foreground group rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => onProductClick(product)}
            >
              
              <div className="relative h-64 overflow-hidden bg-secondary">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Novo
                </span>
              </div>

             
              <div className="p-5">
                <h3 className="text-lg font-semibold text-accent-foreground mb-2">
                  {product.name}
                </h3>

              
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < 4 ? "text-accent fill-accent" : "text-muted-foreground"}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">(24)</span>
                </div>

               
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-foreground">
                    R$ {product.price.toLocaleString("pt-BR")}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addItem({                              
                        id: Number(product.productId),     
                        name: product.name,
                        price: product.price,
                        image: product.imageUrl ?? "",    
                      });
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent/80 text-accent-foreground rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
                  >
                    <ShoppingCart size={16} />
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        {!showViewAll && (
          <div className="text-center mt-12">
            <a
              href="/products"
              className="inline-block px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300"
            >
              Ver todos os produtos
            </a>
          </div>
        )}

      </div>
    </section>
  );
}