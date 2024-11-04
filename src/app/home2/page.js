import DynamicHeaderComponent from "@/component/DynamicHeader";
import Footer from "@/component/Home2/Footer";
import Header2 from "@/component/Home2/Header";
import LayoutHome2 from "@/layout/LayoutHome2";
import LayoutWrapper from "@/layout/LayoutWrapper";

export default function Home() {
  return (
    <>
      {/* <Header2 /> */}
      <DynamicHeaderComponent />
      <LayoutHome2 />
      <Footer />
    </>
  );
}
