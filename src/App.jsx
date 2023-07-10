/* eslint-disable no-unused-vars */

import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorComponent from "./Failure";
import PlaceholderProducts from "./Placeholder";
import SuccessComponent from "./Success";
import ErrorRoute from "./ErrorComponent";

function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-grey">
      <Routes>
        <Route exact path="/" element={<PlaceholderProducts />} />
        <Route exact path="/checkout/success" element={<SuccessComponent />} />
        <Route exact path="/checkout/failure" element={<ErrorComponent />} />
        <Route path="*" component={ErrorRoute} />
      </Routes>
    </div>
  );
}

export default App;
