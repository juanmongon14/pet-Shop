import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Dog, Cat, Bird } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import heroBanner from '../assets/hero-banner.jpg';

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  const categories = [
    {
      id: 'dogs',
      name: 'Perros',
      description: 'Accesorios y juguetes para tu mejor amigo',
      icon: Dog,
      color: 'text-primary'
    },
    {
      id: 'cats',
      name: 'Gatos',
      description: 'Todo para tu felino favorito',
      icon: Cat,
      color: 'text-secondary'
    },
    {
      id: 'others',
      name: 'Otros',
      description: 'Para todas las demás mascotas especiales',
      icon: Bird,
      color: 'text-accent'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Mascotas felices con accesorios PetLove"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-12 w-12 text-white mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold">PetLove</h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Todo lo que tu mascota necesita para ser feliz
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" className="bg-hero-gradient hover:shadow-glow transition-all duration-300">
                Ver Productos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground">
              Conocer Más
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
              Categorías
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Encuentra productos específicos para cada tipo de mascota
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link key={category.id} to={`/products?category=${category.id}`}>
                <Card className="group cursor-pointer transition-all duration-300 hover:shadow-hover hover:-translate-y-2 bg-card-gradient">
                  <CardContent className="p-8 text-center">
                    <category.icon className={`h-16 w-16 mx-auto mb-4 ${category.color} group-hover:scale-110 transition-transform duration-300`} />
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
              Productos Destacados
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Los favoritos de nuestras mascotas y sus dueños
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <Button size="lg" variant="outline" className="hover:bg-hero-gradient hover:text-white transition-all duration-300">
                Ver Todos los Productos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-hero-gradient">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para hacer feliz a tu mascota?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Únete a miles de dueños que ya confían en PetLove para el cuidado de sus mascotas
          </p>
          <Link to="/products">
            <Button size="lg" variant="secondary" className="hover:shadow-glow transition-all duration-300">
              Empezar a Comprar
              <Heart className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
