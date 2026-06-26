import { Hero } from "@/components/sections/Hero";
import { BentoFeatures } from "@/components/sections/BentoFeatures";
import { Workflow } from "@/components/sections/Workflow";
import { Autonomy } from "@/components/sections/Autonomy";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <BentoFeatures />
      <Workflow />
      <Autonomy />
      <Pricing />
      <Testimonials />
      <FAQ />
    </>
  );
}
