
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard'; // Asegúrate de importar el componente ProductCard correctamente

// eslint-disable-next-line react/prop-types
const PlaceholderProducts = () => {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([])
  const url = import.meta.env.VITE_REACT_APP_API

  useEffect(() => {
    fetch(url + '/productos')
      .then(response => response.json())
      .then(data => setProducts(data)).catch(error => console.log(error))
  },[url])

  return (
    <ProductCard products={products?.slice(0,50)} />
  );
};

export default PlaceholderProducts;
