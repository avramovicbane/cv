"use client";

import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Impact from "@/components/Impact";
import WhatIDo from "@/components/WhatIDo";
import FreshCerts from "@/components/FreshCerts";
import Explore from "@/components/Explore";

export default function HomeView() {
  return (
    <>
      <Hero />
      <Ticker />
      <Impact />
      <WhatIDo />
      <FreshCerts />
      <Explore />
    </>
  );
}
