import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function baseLayout(props) {
  return (
  <div className="flex flex-col w-screen h-screen justify-between ">
    {/* <Navbar/> */}
    <div className="h-full w-full flex justify-center items-center">
      {props.children}
    </div>
    <Footer />
  </div>
  );
}
