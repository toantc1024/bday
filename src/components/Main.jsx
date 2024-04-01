"use client";
import React from "react";
import Loader from "./Loader";
import { FaUmbrellaBeach } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SectionWrapper from "./SectionWrapper";
import Letter from "./Letter";
import Card from "./Card";
import { HiArrowDown } from "react-icons/hi";

const Main = () => {
  const [showLoader, setShowLoader] = React.useState(false);
  const [showDateIntro, setShowDateIntro] = React.useState(false);

  return showLoader ? (
    <Loader setShowLoader={(value) => setShowLoader(value)} />
  ) : (
    <>
      <Navbar />
      <SectionWrapper background="bg-orange-400" id="section-one">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-screen flex flex-col gap-4">
              <h1 className="text-5xl font-bold">Full name</h1>
              <div className="stats-vertical lg:stats-horizontal  stats shadow"></div>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper background="bg-sky-400" id="section-two">
        <Card />
      </SectionWrapper>
      <SectionWrapper
        background="bg-emerald-400"
        id="section-three"
        custom={"overflow-hidden"}
      >
        <Letter />
      </SectionWrapper>

      <Footer />
    </>
  );
};

export default Main;
