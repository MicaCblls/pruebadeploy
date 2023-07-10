import {Link}   from "react-router-dom";
import {BsFillCartCheckFill}   from "react-icons/bs";
 const SuccessComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-6 text-3xl font-bold  text-header flex justify-center items-center "><BsFillCartCheckFill className="text-green-400 " fontSize={50}/></h1>
      <div className="mb-20 text-lg md:text-2xl flex justify-center items-center flex-col ">
      <p className=" text-gray-700 font-semibold">
        ¡Gracias por su compra! 
      </p>
      <p className=" text-gray-700 ">
        Su pedido ha sido procesado correctamente.
      </p>
      </div>
      <Link to="/" className="border hover:border-header bg-yellow/70 border-transparent text-header font-semibold py-1 px-4 rounded text-lg hover:text-header transition-all">
        Volver al Inicio
      </Link>
 
    </div>
  );
};
export default SuccessComponent;
