import React from "react";
import "./App.css";
import "./Responsive.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Home from "./Home/Home";
import PrivateComp from "./PrivateComp";
import Admin from "./Admin/Admin";
import FormSubmitThanks from "./FormSubmitThanks";
import PageNotFound from "./PageNotFound";
// import LoginRegister from "./Login/LoginRegister";

function App() {
  return (
    <div className="App">
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} exect />
        <Route path="/login" element={<Login />} />
        <Route path="/thanks-form-submit-page" element={<FormSubmitThanks />} />
        <Route path="/*" element={<PageNotFound />} />

        {/* privatecomp */}
        <Route element={<PrivateComp />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

        {/* <Route path="/a" element={<LoginRegister />} /> */}
      </Routes>
    </div>
  );
}

export default App;
