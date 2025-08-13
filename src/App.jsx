import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layout/RootLoyout.jsx";
import Home from "./pages/Home.jsx";
import Pricing from "./pages/Pricing/Pricing.jsx";
import Form from "./pages/Form.jsx";
import CoreBenefits from "./pages/CoreBenefits/CoreBenefits.jsx";
import WhatsappBookingChaos from "./components/ProblemPromise/WhatsappBookingChaos.jsx";
import ManualEverything from "./components/ProblemPromise/ManualEverything.jsx";
import GhostCustomer from "./components/ProblemPromise/GhostCustomer.jsx";
import StaffCommission from "./components/ProblemPromise/StaffCommission.jsx";
import FlyingBlind from "./components/ProblemPromise/FlyingBlind.jsx";
import SAS from "./components/Features/SAS.jsx";
import FeaturesLayout from "./layout/FeaturesLayout.jsx"
import SPT from "./components/Features/SPT.jsx";
import RBB from "./components/Features/RBB.jsx";
import SIC from "./components/Features/SIC.jsx";
import CRA from "./components/Features/CRA.jsx";
import MLE from "./components/Features/MLE.jsx";
import MLM from "./components/Features/MLM.jsx";
import AAR from "./components/Features/AAR.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Privacy from "./pages/Privacy.jsx";
import Terms from "./pages/Terms.jsx";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>

        <Route path="features" element={<FeaturesLayout/>}>
          <Route index element={<CoreBenefits />} />
          <Route path="sas" element={<SAS/>} />
          <Route path="spt"element={<SPT/>} />
          <Route path="rbb" element={<RBB/>}/>
          <Route path="sic" element={<SIC/>}/>
          <Route path="cra" element={<CRA/>}/>
          <Route path="mle" element={<MLE/>}/>
          <Route path="mlm" element={<MLM/>}/>
          <Route path="aar" element={<AAR/>}/>
        </Route>

        <Route path="pricing" element={<Pricing />}/>
        <Route path="get-started" element={<Form />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms-of-use" element={<Terms/>} />

        
        <Route path="whatsapp-chaos" element={<WhatsappBookingChaos/>}/>
        <Route path="manual-everything" element={ <ManualEverything/> } />
        <Route path="ghost-customer" element={<GhostCustomer/>}/>
        <Route path="staff-commission" element={<StaffCommission/>}/>
        <Route path="flying-blind" element={<FlyingBlind/>}/>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}
