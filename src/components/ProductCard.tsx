import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Product } from '../contexts/CartContext';
import { useCart } from '../contexts/CartContext';
import { toast } from '../hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', product });
    toast({
      title: "¡Producto agregado!",
      description: `${product.name} se ha agregado al carrito.`,
      duration: 2000,
    });
  };

  return (
    <Card className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-hover hover:-translate-y-1">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-2xl font-bold text-primary">
          ${product.price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-hero-gradient hover:shadow-glow transition-all duration-300"
          size="sm"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
};