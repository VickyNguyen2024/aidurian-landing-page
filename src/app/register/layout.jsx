import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ToastProvider from "@/components/ToastProvider";

export const metadata = {
  title: "Register | AI Durian | International Durian Association",
  description: "Register | AI Durian | International Durian Association",
};

const RegisterLayout = ({ children }) => {
  return (
    <div className="lg:min-h-screen lg:flex lg:flex-col lg:justify-between">
      <Header />
      {children}
      <ToastProvider />
      <Footer />
    </div>
  );
};

export default RegisterLayout;
