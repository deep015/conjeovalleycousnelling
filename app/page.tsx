import  Header  from "@/components/layout/Header";
import  Hero  from "@/components/home/Hero";
import  Introsection  from "@/components/home/Introsection";
import  WhoWeHelp  from "@/components/home/WhoWeHelp";
import FinalCTA from "@/components/home/FinalCTA";
import Expertise from "@/components/home/Experstise";
import HowWeWork from "@/components/home/HowWeWork";
import Family from "@/components/home/Family";
import Specialties from "@/components/home/Specialties";
import ScheduleAppointment from "@/components/home/ScheduleAppointment";
import Footer from "@/components/layout/Footer";

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
        <Family />
        <Specialties />
        <ScheduleAppointment />
        <Footer />
      </main>
    </>
  );
}