import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ToastProvider from "@/components/ToastProvider";

export const metadata = {
  title: "Contact | AI Durian | International Durian Association",
  description: "Contact | AI Durian | International Durian Association",
};

const ContactLayout = ({ children }) => {
  return (
    <div className="lg:min-h-screen lg:flex lg:flex-col lg:justify-between">
      <Header />
      {children}
      <ToastProvider />
      <Footer />
    </div>
  );
};

export default ContactLayout;
