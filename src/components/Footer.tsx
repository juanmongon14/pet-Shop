import { Heart, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-card border-t mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                PetLove
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Todo lo que tu mascota necesita para ser feliz. Productos de calidad con amor y cuidado.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Inicio
              </Link>
              <Link to="/products" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Productos
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Nosotros
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contacto</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@petlove.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Pet Street, Animal City</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/petlove"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/petlove"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 PetLove. Todos los derechos reservados. Hecho con ❤️ para tu mascota.</p>
        </div>
      </div>
    </footer>
  );
};