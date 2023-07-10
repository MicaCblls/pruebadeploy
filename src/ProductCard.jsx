/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
const ProductCard = ({products}) => {
  // eslint-disable-next-line no-unused-vars

  // eslint-disable-next-line react/prop-types
  if (products?.length === 0) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      {products?.map((product, index) => (
        <div className="bg-white p-4 shadow-md text-header" key={index}>
          <h3 className="text-lg font-semibold mb-2">{product.descripcion}</h3>
          <p className="text-gray-600">${product.precio}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
