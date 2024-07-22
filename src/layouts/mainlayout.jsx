import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const MainLayout = (props) => {
  const { children } = props;

  return (
    <div className="relative min-h-screen flex flex-col">
    
      <Header />
      
      {children}
      <Footer />
      
      
    </div>
  );
};
export default MainLayout;