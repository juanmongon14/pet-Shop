import { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { Button } from '../components/ui/button';

const categories = [
  { id: 'all', name: 'Todos', filter: null },
  { id: 'dogs', name: 'Perros', filter: 'dogs' },
  { id: 'cats', name: 'Gatos', filter: 'cats' },
  { id: 'others', name: 'Otros', filter: 'others' }
] as const;

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'dogs' | 'cats' | 'others'>('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen">
      <div className="container py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            Nuestros Productos
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra amplia selección de productos para mascotas, diseñados con amor y cuidado.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={activeCategory === category.id ? "bg-hero-gradient hover:shadow-glow" : ""}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No hay productos disponibles en esta categoría.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;