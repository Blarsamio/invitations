import React from 'react';
import Hero from './components/Hero';
import Event from './components/Event';

const App = () => {
  return (
    <div className='bg-[#FEFCFD] bg-no-repeat bg-cover overflow-hidden'>
      <Hero />
      <Event />
      {/* {<div className='h-[4000px]'></div>} */}
    </div>
  );
}

export default App;
