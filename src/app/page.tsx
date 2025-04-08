import Hero from "@components/app/sections/Hero"
import Social from "@components/app/sections/Social";
import { Barber } from "@components/app/sections/Barber";
import { Joyeria } from "@components/app/sections/Joyeria";
import { Filosophy } from "@components/app/sections/Filosophy";
import Testimonials from "@components/app/sections/Testimonials";
import Contact from "@components/app/sections/Contact";
import PreFooter from "@components/app/sections/PreFooter";
import { Footer } from "@components/app/sections/Footer";
import {ScrollSection} from "@components/app/sections/ScrollSection";
import { Timeline } from "./components/timeline/Timelime";

export default function Home() {
  return (
    <>
    <Hero/>
    <Timeline/>
    <ScrollSection/>
    <Social/>
    <Barber/>
    <Joyeria/>
    <Filosophy/>
    <Testimonials/>
    <Contact/>
    <PreFooter/>
    <Footer/>
    </>
  );
}
