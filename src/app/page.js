import Footer from "@/component/Default/Footer";
import Header1 from "@/component/Default/Header";
import DynamicHeaderComponent from "@/component/DynamicHeader";
import LayoutWrapper from "@/layout/LayoutWrapper";

export default function Home() {
  return (
    <>
    <DynamicHeaderComponent />
      {/* <Header1 /> */}
      <LayoutWrapper />
      <Footer />
    </>
  );
}
