import { Routes, Route } from "react-router-dom";
import  {HelmetProvider}  from 'react-helmet-async';
import Navbar from "./component/navbar";
import Home from "./component/home";
import VideoSection from "./component/videoSection";
import WhatWeDo from "./component/WhatWeDo";
import OurWorkFlow from "./component/OurWorkFlow";
import AboutUs from "./component/AboutUs";
import LetsTalk from "./component/LetsTalk";
import Footer from "./component/Footer";
import Project from "./component/letsConnect";
import IntroOfSection from "./component/ourCompanyComponent/firstSection";
import AboutUsMain from "./component/ourCompanyComponent/AboutUsMainPage";
import SharedVision from "./component/ourCompanyComponent/vision";
import HeaderOfExperties from "./component/ourExpertiesComponent/header";
import Technology from "./component/ourExpertiesComponent/Technology";
import Experience from "./component/ourExpertiesComponent/Experience";
import Strategy from "./component/ourExpertiesComponent/Strategy";
import Growth from "./component/ourExpertiesComponent/Growth";
import HeaderInService from "./component/ServicesComponent/HeaderInService";
import MobileAppService from "./component/ServicesComponent/MobileAppService";
import WebDevelopmentService from "./component/ServicesComponent/WebDevelopmentService";
import AISolutionsService from "./component/ServicesComponent/AISolutionsService";
import BackendInfrastructureService from "./component/ServicesComponent/BackendInfrastructureService";
import ProductDiscoveryService from "./component/ServicesComponent/ProductDiscoveryService";
import UXDesignService from "./component/ServicesComponent/UXDesignService";
import VisualProductDesignService from "./component/ServicesComponent/VisualProductDesignService";
import PlanningRoadmappingService from "./component/ServicesComponent/PlanningRoadmappingService";
import ScrollToTop from "./component/ScrollToTop";

function App() {
  return (
    <HelmetProvider>
      <ScrollToTop/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <VideoSection />
              <WhatWeDo />
              <OurWorkFlow />
              <AboutUs />
              <LetsTalk />
              <Footer />
            </>
          }
        ></Route>

        <Route
          path="/project"
          element={
            <>
              <Project />
              <Footer/>
            </>
          }
        ></Route>

        <Route
          path="/ourcompany"
          element={
            <>
              <Navbar />
              <IntroOfSection />
              <AboutUsMain />
              <SharedVision />
              <Footer />
            </>
          }
        ></Route>

        <Route path="/ourexperties" element={
          <>
          <Navbar />
          <HeaderOfExperties/>
          <Technology />
          <Experience />
          <Strategy />
          <Growth />
          <LetsTalk/>
          <Footer/>
          </>
        }>
        </Route>

        <Route path="/services" element={
          <>
          <Navbar/>
          <HeaderInService/>
          <MobileAppService/>
          <div className="h-px bg-gray-200 mx-10"></div>
          <WebDevelopmentService/>
          <div className="h-px bg-gray-200 mx-10"></div>
          <AISolutionsService/>
          <div className="h-px bg-gray-200 mx-10"></div>
          <BackendInfrastructureService/>
          <div className="h-px bg-gray-200 mx-10"></div>
          <ProductDiscoveryService/>
          <div className="h-px bg-gray-200 mx-10"></div>
          <UXDesignService/>
          <div className="h-px bg-gray-200 mx-10"></div>
          <VisualProductDesignService/>
          <div className="h-px bg-gray-200 mx-10"></div>
          <PlanningRoadmappingService/>
          <div className="h-px bg-gray-200 mx-10"></div>
          <LetsTalk/>
          <Footer/>
          </>
        }/>
      </Routes>
      
    </HelmetProvider>
  );
}

export default App;
