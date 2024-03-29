import { Routes, Route } from "react-router-dom";

import {
  Contact,
  Home,
  Login,
  Services,
  Register,
  Doctors,
  DoctorDetail,
} from "../pages";

export const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};
