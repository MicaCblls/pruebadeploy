import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const error = useRouteError();
  return (
    <div
      id="error-page"
      className="flex flex-col justify-center items-center w-full h-1/3 gap-4 text-lg text-nav"
    >
      <h1>Oops!</h1>
      <p>Ocurrió un error inesperado.</p>
      <p>
        <i>Pagina {error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorComponent;
