import { useState } from "react";
import { useCart } from "../../Context/CartContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useToast } from "../../hooks/use-toast";
import { CheckCircle } from "lucide-react";

const CheckoutModal = () => {
  const { isCheckoutOpen, closeCheckout, items, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

   
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    toast({
      title: "Order placed successfully!",
      description: "You will receive a confirmation email shortly.",
    });

    
    setTimeout(() => {
      clearCart();
      setIsSuccess(false);
      closeCheckout();
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        city: "",
        zipCode: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
      });
    }, 2000);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open && !isSubmitting) {
      closeCheckout();
      setIsSuccess(false);
    }
  };

  if (isSuccess) {
    return (
      <Dialog open={isCheckoutOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
             Obrigado por seu pedido!
            </h3>
            <p className="text-muted-foreground">
              Seu pedido foi processado com sucesso. Você receberá um email de confirmação em breve.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isCheckoutOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-foreground">
        <DialogHeader>
          <DialogTitle>Checkout</DialogTitle>
          <DialogDescription>
           Preencha os detalhes do seu pedido abaixo
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
      
          <div className="bg-muted-foreground rounded-xl p-4 space-y-3">
            <h4 className="font-medium text-foreground">Resumo do Pedido</h4>
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-small">
                <span className="text-accent-foreground">
                  {item.name} × {item.quantity}
                </span>
                <span className="text-foreground">${item.price * item.quantity}</span>
              </div>
            ))}
            <div className="border-t border-border pt-3 flex justify-between font-semibold">
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>
          </div>

        
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Informações de Entrega</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Seu Nome</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className=" bg-foreground rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Sobrenome</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className=" bg-foreground rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-foreground rounded-lg"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Endereço</Label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="bg-foreground rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">Cidade</Label>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="bg-foreground rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipCode">CEP</Label>
                <Input
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                  className="bg-foreground rounded-lg"
                />
              </div>
            </div>
          </div>

         
          <div className="space-y-4">
            <h4 className="font-medium text-foreground">Informações de Pagamento</h4>
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Número do Cartão</Label>
              <Input
                id="cardNumber"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={formData.cardNumber}
                onChange={handleChange}
                required
                className="bg-foreground rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Data de Expiração</Label>
                <Input
                  id="expiry"
                  name="expiry"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={handleChange}
                  required
                  className="bg-foreground rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  name="cvv"
                  placeholder="123"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                  className="bg-foreground rounded-lg"
                />
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full rounded-full"
            size="lg"
            disabled={isSubmitting || items.length === 0}
          >
            {isSubmitting ? "Processing..." : `Total: $${totalPrice}`}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;