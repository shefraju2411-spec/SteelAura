import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { OurCompany } from "./pages/OurCompany";
import { Products } from "./pages/Products";
import { CustomManufacturing } from "./pages/CustomManufacturing";
import { QualityControl } from "./pages/QualityControl";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-company" element={<OurCompany />} />
        <Route path="/products" element={<Products />} />
        <Route path="/oem-odm" element={<CustomManufacturing />} />
        <Route path="/quality" element={<QualityControl />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
