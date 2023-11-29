import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Report = React.lazy(() => import("pages/Report"));
const ReportOne = React.lazy(() => import("pages/ReportOne"));
const Order = React.lazy(() => import("pages/Order"));
const Stock = React.lazy(() => import("pages/Stock"));
const OrderOne = React.lazy(() => import("pages/OrderOne"));
const Dashbord = React.lazy(() => import("pages/Dashbord"));
const LoginPage = React.lazy(() => import("pages/LoginPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/orderone" element={<OrderOne />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/order" element={<Order />} />
          <Route path="/reportone" element={<ReportOne />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
