import React from "react";
import AboutContent from "./_ui/AboutContent";
import ContactUs from "./_ui/ContactUs";
import Nav from "@/component/Navbar/Nav";

export default function AboutPage() {
  return (
    <>
      <div className="space"></div>
      <div>
        <Nav />
      </div>
      <AboutContent />
      <ContactUs />
      <div className="space"></div>
    </>
  );
}
