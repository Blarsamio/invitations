import React from "react";
import { InView, useInView } from "react-intersection-observer";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';
import Countdown from 'react-countdown';
import { differenceInHours, differenceInMinutes } from 'date-fns';
import { HiArrowDown } from 'react-icons/hi';

const calculateCountdown = () => {
  const targetDate = new Date('2023-05-25T21:35:00');
  const currentDate = new Date();

  // Calculate the remaining time in hours and minutes
  const hours = differenceInHours(targetDate, currentDate);
  const minutes = differenceInMinutes(targetDate, currentDate) % 60;

  return { hours, minutes };
};

const birthdays = [
  {
    name: 'Ian McKellen',
    description: 'Otherwise known as Magneto from the X-MEN, he turns 82 on Thursday!',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/SDCC13_-_Ian_McKellen.jpg/1200px-SDCC13_-_Ian_McKellen.jpg',
  },
  {
    name: 'Mike Myers',
    description: 'Otherwise known as Austin Powers, he turns 58 on Thursday!',
    img: 'https://m.media-amazon.com/images/M/MV5BMTY0MTM1MTM5Nl5BMl5BanBnXkFtZTcwNzA1OTM3MQ@@._V1_FMjpg_UX1000_.jpg'
  },
  {
    name: 'Cillian Murphy',
    description: "Otherwise known as hot guy from Peaky Blinders, he turns 45 on Thursday!",
    img: 'https://luxurylondon.co.uk/wp-content/uploads/2022/08/cillian-murphy-interview-1-xl-hd-1465x1099-c-center.jpg'
  },
  {
    name: 'Octavia Spencer',
    description: "Otherwise known as the maid from The Help, she turns 51 on Thursday!",
    img: 'https://cdn.britannica.com/75/211475-050-6F8F0CEB/Octavia-Spencer-2019.jpg'
  }
]

const When = () => {
  const [ref, InView] = useInView({
    threshold: 0.5,
  });
  const { hours, minutes } = calculateCountdown();
  return (
    <section id="when" className="section" ref={ref}>
      <div className="container mx-auto bg-[#12559330]">
        <div className="flex flex-col gap-y-10 lg:flex-col lg:items-center lg:gap-y-5 h-screen">
          <motion.h2 variants={fadeIn("up", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className="h2 text-accent text-center leading-tight pt-5">
            When?
          </motion.h2>
          <div className="flex flex-row">
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.5 }}
              className="flex-1 flex flex-col justify-around">
              <h2 className="h2 leading-tight font-headers font-semibold mb-2 text-accent">Thursday, <br />May 25th</h2>
              <p className="font-body leading-tight">The film will start screening at <br /><strong className="text-accent h2">21:35</strong></p>
              <h2>
                <Countdown
                  date={Date.now() + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000)}
                  renderer={({ days, hours, minutes, seconds, completed }) => {
                    if (completed) {
                      // Render something when the countdown is completed
                      return <span>It's time for the movie!</span>;
                    } else {
                      // Render the remaining time in hours and minutes
                      return (
                        <div className="mt-2">
                          <h3 className="h3 text-accent">{days} days </h3>
                          <h3 className="h3 text-accent">{hours} hours </h3>
                          <h3 className="h3 text-accent">{minutes} minutes </h3>
                          <h3 className="h3 text-accent">{seconds} seconds</h3>
                        </div>
                      );
                    }
                  }}
                />
              </h2>
            </motion.div>
            <motion.div
              variants={fadeIn('left', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.5 }}
              className='flex-1'>
              {birthdays.map((birthday, index) => {
                const { name, description, img } = birthday;
                return (
                  <div className='border-b border-accent/20 h-[112px] mb-4 flex' key={index}>
                    <div className='max-w-[476px] mb-8'>
                      <h4 className='text-[20px] tracking-wider font-headers font-semibold mb-2 text-accent'>{name}</h4>
                      <p className='font-body leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col items-end'>
                      <img src={img} alt="" className="h-[80px] w-[80px] rounded-xl object-cover object-center ml-2" />
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="cursor-pointer">
            <Link
              to="event"
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
}

export default When;
