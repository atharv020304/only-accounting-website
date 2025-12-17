import React from "react";
import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import HowItWorks from "../components/HowItWorks.jsx";

import Contact from "./Contact";

export default function Home() {
    return (
        <>
            <Hero />
            <Services />
            <HowItWorks />
            <Contact />
        </>
    );
}