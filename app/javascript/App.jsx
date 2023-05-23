import React from 'react';
import Hero from './components/Hero';
import Event from './components/Event';
import Details from './components/Details';
import When from './components/When';

const App = () => {
  return (
    <div className='bg-[#FEFCFD] bg-no-repeat bg-cover overflow-hidden'>
      <Hero />
      <Details />
      <When />
      <Event />
      {/* {<div className='h-[4000px]'></div>} */}
    </div>
  );
}

export default App;
