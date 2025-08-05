import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layout/RootLoyout.jsx";
import Home from "./pages/Home.jsx";
import Pricing from "./pages/Pricing/Pricing.jsx";
import Login from "./pages/Login.jsx";
import HowItWorks from "./temp/HowItWorks.jsx";
import CoreBenefit from "./temp/CoreBenefits/CoreBenefit.jsx";
import Pricings from "./temp/Pricings/Pricings.jsx";
import CoreBenefits from "./pages/CoreBenefits/CoreBenefits.jsx";
import WhatsappBookingChaos from "./components/ProblemPromise/WhatsappBookingChaos.jsx";
import SAS from "./components/Features/SAS.jsx";
import FeaturesLayout from "./layout/FeaturesLayout.jsx"
import SPT from "./components/Features/SPT.jsx";
import RBB from "./components/Features/RBB.jsx";
import SIC from "./components/Features/SIC.jsx";
import CRA from "./components/Features/CRA.jsx";
import MLE from "./components/Features/MLE.jsx";
import MLM from "./components/Features/MLM.jsx";
import PI from "./components/Features/PI.jsx";

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
          <Route path="pi" element={<PI/>}/>
        </Route>

        <Route path="pricing" element={<Pricing />}/>
        <Route path="auth" element={<Login />} />
        <Route path="Sample1" element={<HowItWorks />} />
        <Route path="sample2" element={<CoreBenefit />} />
        <Route path="pricing1" element={<Pricings />} />
        <Route path="WhatsappChaos" element={<WhatsappBookingChaos/>}/>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}
