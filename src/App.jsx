import { Routes, Route } from "react-router-dom";
import Navbar from "./conponent/navbar";
import Home from "./conponent/home";
import VideoSection from "./conponent/videoSection";
import WhatWeDo from "./conponent/WhatWeDo";
import OurWorkFlow from "./conponent/OurWorkFlow";
import AboutUs from "./conponent/AboutUs";
import LetsTalk from "./conponent/LetsTalk";
import Footer from "./conponent/Footer";
import Project from "./conponent/letsConnect";
import IntroOfSection from "./conponent/ourCompanyComponent/firstSection";
import AboutUsMain from "./conponent/ourCompanyComponent/AboutUsMainPage";
import SharedVision from "./conponent/ourCompanyComponent/vision";
import HeaderOfExperties from "./conponent/ourExpertiesComponent/header";
import Technology from "./conponent/ourExpertiesComponent/Technology";
import Experience from "./conponent/ourExpertiesComponent/Experience";
import Strategy from "./conponent/ourExpertiesComponent/Strategy";
import Growth from "./conponent/ourExpertiesComponent/Growth";
import HeaderInService from "./conponent/ServicesComponent'/HeaderInService";
import MobileAppService from "./conponent/ServicesComponent'/MobileAppService";
import WebDevelopmentService from "./conponent/ServicesComponent'/WebDevelopmentService";
import AISolutionsService from "./conponent/ServicesComponent'/AISolutionsService";
import BackendInfrastructureService from "./conponent/ServicesComponent'/BackendInfrastructureService";
import ProductDiscoveryService from "./conponent/ServicesComponent'/ProductDiscoveryService";
import UXDesignService from "./conponent/ServicesComponent'/UXDesignService";
import VisualProductDesignService from "./conponent/ServicesComponent'/VisualProductDesignService";
import PlanningRoadmappingService from "./conponent/ServicesComponent'/PlanningRoadmappingService";
import ScrollToTop from "./conponent/ScrollToTop";
import PageTitleUpdater from "./conponent/PageTitleUpdater";

function App() {
  return (
    <>
    <PageTitleUpdater />
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
      
    </>
  );
}

export default App;
