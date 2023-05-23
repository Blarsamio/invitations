import React from "react";
import { InView, useInView } from "react-intersection-observer";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { HiArrowDown } from 'react-icons/hi';
import { Link } from 'react-scroll';
import videoBg from '../../assets/images/video.mp4';

const Details = () => {
  const [ref, InView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="details" className="section" ref={ref}>
      <div className="container mx-auto bg-[#12559330]">
        <div className="flex flex-col gap-y-10 lg:flex-col lg:items-center lg:gap-y-10 h-screen">
          <motion.h2
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="h2 mt-10 text-accent">
            What?
          </motion.h2>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=""
          >
            <video src={videoBg} autoPlay loop muted className="rounded-xl h-[440px]"></video>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="cursor-pointer">
            <Link
              to="when"
              spy={true}
              smooth={true}
              duration={500}
              className='flex justify-center'
            ><HiArrowDown size="3rem" color='#79264D' /></Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Details;
