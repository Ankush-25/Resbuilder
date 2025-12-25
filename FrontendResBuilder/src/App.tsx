import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from './layout/layout';
import { Login } from './Components/login';
import { SignUp } from './Components/signUp';
import { ForgotPassword } from './Components/forgotpassword';
import { Dashboard } from './dashboard/Dashboard';
import { Profile } from './Profile/profile';
import { Feature } from './landingPage/Feature';
import { Pricing } from './landingPage/pricing';
import { AboutUs } from './landingPage/aboutus';
import { TemplateGallery } from './landingPage/template';
import { PrivacyPolicy } from './landingPage/privacy';

const app = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path='/ForgotPassword' element={<ForgotPassword />} />
        <Route path='/app' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="features" element={<Feature />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="templates" element={<TemplateGallery />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};
export default app;

