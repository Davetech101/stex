import Header from "./_components/Header";
import Hero from "./_components/Hero";
import HotTrends from "./_components/HotTrends";
import Reasons from "./_components/Reasons";
import AdvancedOrder from "./_components/AdvancedOrder";
import TechnicalChart from "./_components/TechnicalChart";
import Future from "./_components/Future";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero/>
      <HotTrends/>
      <Reasons/>
      <AdvancedOrder/>
      <TechnicalChart/>
      <Future/>
      <Footer/>
    </main>
  );
}
