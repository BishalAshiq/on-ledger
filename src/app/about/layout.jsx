import React from "react";
import "./testAbout.css";
import AboutFooter from "./_ui/AboutFooter";

export default function Layout({children}) {
  return (
    <div className="main">
      <main className="main_wrapper">
        <div className="content_wrapper">
          <div className="content">{children}</div>
        </div>
        <AboutFooter />
      </main>
    </div>
  );
}
