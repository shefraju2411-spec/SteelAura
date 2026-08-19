import { Routes, Route } from "react-router-dom";
import { OemLandingLanguageProvider } from "./context/OemLandingLanguageContext";
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
import { WholesaleJewelry } from "./pages/WholesaleJewelry";
import { WholesaleStainlessSteelRings } from "./pages/WholesaleStainlessSteelRings";
import { Resources } from "./pages/Resources";
import { Blog } from "./pages/Blog";
import { Faq } from "./pages/Faq";
import { WhyStainlessSteelFashionJewelry } from "./pages/blog/WhyStainlessSteelFashionJewelry";
import { Stainless304Vs316L } from "./pages/blog/Stainless304Vs316L";
import { PrivateLabelJewelry } from "./pages/PrivateLabelJewelry";
import { LandingLayout } from "./components/LandingLayout";
import { OemLanding } from "./pages/lp/OemLanding";
import { QualityLanding } from "./pages/lp/QualityLanding";
import { WholesaleLanding } from "./pages/lp/WholesaleLanding";

export default function App() {
  return (
    <Routes>
      <Route
        element={
          <OemLandingLanguageProvider>
            <LandingLayout />
          </OemLandingLanguageProvider>
        }
      >
        <Route path="/lp/oem" element={<OemLanding />} />
        <Route path="/lp/quality" element={<QualityLanding />} />
        <Route path="/lp/wholesale" element={<WholesaleLanding />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/our-company" element={<OurCompany />} />
        <Route path="/products" element={<Products />} />
        <Route path="/oem-odm" element={<CustomManufacturing />} />
        <Route path="/oem-odm/private-label-jewelry" element={<PrivateLabelJewelry />} />
        <Route path="/wholesale-jewelry" element={<WholesaleJewelry />} />
        <Route
          path="/wholesale-jewelry/stainless-steel-rings"
          element={<WholesaleStainlessSteelRings />}
        />
        <Route path="/packaging-branding" element={<PackagingBranding />} />
        <Route path="/quality" element={<QualityControl />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/blog/why-stainless-steel-fashion-jewelry"
          element={<WhyStainlessSteelFashionJewelry />}
        />
        <Route path="/blog/304-vs-316l-stainless-steel-jewelry" element={<Stainless304Vs316L />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
