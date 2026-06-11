import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { OurCompany } from "./pages/OurCompany";
import { Products } from "./pages/Products";
import { CustomManufacturing } from "./pages/CustomManufacturing";
import { QualityControl } from "./pages/QualityControl";
import { Contact } from "./pages/Contact";
import { PackagingBranding } from "./pages/PackagingBranding";
import { Gallery } from "./pages/Gallery";
import { LandingLayout } from "./components/LandingLayout";
import { OemLanding } from "./pages/lp/OemLanding";

export default function App() {
  return (
    <Routes>
      <Route element={<LandingLayout />}>
        <Route path="/lp/oem" element={<OemLanding />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/our-company" element={<OurCompany />} />
        <Route path="/products" element={<Products />} />
        <Route path="/oem-odm" element={<CustomManufacturing />} />
        <Route path="/packaging-branding" element={<PackagingBranding />} />
        <Route path="/quality" element={<QualityControl />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
