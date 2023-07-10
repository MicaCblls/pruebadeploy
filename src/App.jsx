/* eslint-disable no-unused-vars */

import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorComponent from "./Failure";
import PlaceholderProducts from "./Placeholder";
import SuccessComponent from "./Success";

function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-grey">
      <Routes>
        <Route path="/" element={<PlaceholderProducts />} />
        <Route path="/checkout/success" element={<SuccessComponent />} />
        <Route path="/checkout/failure" element={<ErrorComponent />} />
        <Route path="*" component={ErrorComponent} />
      </Routes>
    </div>
  );
}

export default App;
