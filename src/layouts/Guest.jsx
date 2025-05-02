import { Outlet } from "react-router-dom";
import TheNavbar from "../components/TheNavbar";

const GuestLayout = () => {
  return (
    <div className="bg-gray-300 min-h-screen">
      <TheNavbar />
      <div className="bg-white max-w-xl mx-auto border rounded p-10 m-10">
        {/* <h4>It's Working</h4> */}
        {/* <HomePage />
        <ContactPage />
        <AboutPage /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default GuestLayout;
