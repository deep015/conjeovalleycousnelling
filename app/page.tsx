import  Header  from "@/components/layout/Header";
import  Hero  from "@/components/home/Hero";
import  Introsection  from "@/components/home/Introsection";
import  WhoWeHelp  from "@/components/home/WhoWeHelp";
import FinalCTA from "@/components/home/FinalCTA";
import Expertise from "@/components/home/Experstise";
import HowWeWork from "@/components/home/HowWeWork";
import Specialties from "@/components/home/Specialties";
import ScheduleAppointment from "@/components/home/ScheduleAppointment";
import Footer from "@/components/layout/Footer";
import OurOffice from "@/components/home/OurOffice";
import FAQs from "@/components/home/FAQs";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Introsection />
        <WhoWeHelp />
        <FinalCTA />
        <Expertise />
        <HowWeWork />
 
        <Specialties />
        <OurOffice/>
        <FAQs />
        <ScheduleAppointment />
        <Footer />
      </main>
    </>
  );
}