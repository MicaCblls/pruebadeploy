import {Link}   from "react-router-dom";
import {MdError}   from "react-icons/md";
const ErrorComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6"><MdError className="text-red-400 rounded-full border border-red-400 " fontSize={56}/></h1>
    
      <div className="mb-20 text-lg md:text-2xl flex justify-center items-center flex-col">
      <p className="  text-red-600 overflow-ellipsis">
      Ha ocurrido un error al procesar su compra.
      </p>
      <p className="  text-red-600 font-semibold">
      Por favor, inténtelo nuevamente.
      </p>
      </div>
      <Link to="/checkout/form" className="border border-header bg-yellow/70 hover:border-transparent text-header font-semibold py-1 px-4 rounded text-lg">
        Volver a intentar
      </Link>
    </div>
  );
};

export default ErrorComponent;
