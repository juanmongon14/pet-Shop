import { Heart, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useCart } from '../contexts/CartContext';
import { Badge } from './ui/badge';

interface HeaderProps {
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const { state } = useCart();
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Heart className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
            PetLove
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Inicio
          </Link>
          <Link to="/products" className="text-foreground hover:text-primary transition-colors">
            Productos
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors">
            Nosotros
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <User className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="relative"
            onClick={onCartClick}
          >
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                {itemCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};