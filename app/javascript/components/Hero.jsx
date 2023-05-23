import React from 'react';
import { InView, useInView } from 'react-intersection-observer';
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi'
import { Link } from 'react-scroll';

const Hero = () => {
  const [ref, InView] = useInView({
    threshold: 0.5,
  });
  return (<section id="main" className="section" ref={ref}>
    <div className='container bg-[#12559330] mx-auto'>
      <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 bg-[url("https://i.imgur.com/wVfljpb.png")] bg-contain bg-no-repeat h-[440px] bg-top'></motion.div>
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex flex-col'>
          <h2 className='h2 text-accent text-center leading-tight'>Hello, my name is Darkwing Duck</h2>
          <h3 className='h3 text-accent text-center font-body'>You're hereby invited to the <br />screening of a potentially <br />disturbing movie, <br />scroll down for more details!</h3>
          <div className='down-b cursor-pointer ease-in-out duration-150'>
            <Link
              to="event"
              spy={true}
              smooth={true}
              duration={500}
              className='flex justify-center'
            ><HiArrowDown size="3rem" color='#79264D' /></Link>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
}

export default Hero;
