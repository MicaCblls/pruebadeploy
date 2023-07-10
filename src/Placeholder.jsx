
import ProductCard from './ProductCard'; // Asegúrate de importar el componente ProductCard correctamente

const PlaceholderProducts = () => {
  const products = [
    { id: 1, description: 'Producto 1', price: 9.99 },
    { id: 2, description: 'Producto 2', price: 19.99 },
    { id: 3, description: 'Producto 3', price: 14.99 },
    { id: 4, description: 'Producto 4', price: 24.99 },
    { id: 5, description: 'Producto 5', price: 12.99 },
    { id: 6, description: 'Producto 6', price: 29.99 },
    { id: 7, description: 'Producto 7', price: 17.99 },
    { id: 8, description: 'Producto 8', price: 21.99 },
    { id: 9, description: 'Producto 9', price: 16.99 },
    { id: 10, description: 'Producto 10', price: 11.99 }
  ];

  return (
    <ProductCard products={products} />
  );
};

export default PlaceholderProducts;
