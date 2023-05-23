import React from "react";

import { InView, useInView } from "react-intersection-observer";

import { fadeIn } from "../variants";

import { motion } from "framer-motion";

const Event = () => {
  const [ref, InView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="event" className="section" ref={ref}>
      <div className="container mx-auto bg-[#12559330]">
        <div className="flex flex-row gap-y-10 lg:flex-col lg:items-center lg:gap-y-10 h-screen">
          <motion.h2
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="h2 text-accent text-center leading-tight pt-5"
          >
            Where?
          </motion.h2>
          <motion.iframe
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mb-10 rounded-lg shadow-xl"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11970.488186499613!2d2.1568812!3d41.4040137!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2bdd9a82713%3A0xd25f880b89de1079!2sCinemes%20Verdi!5e0!3m2!1ses-419!2ses!4v1684760182444!5m2!1ses-419!2ses" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </motion.iframe>
        </div>
      </div>
    </section>
  );
};

export default Event;
