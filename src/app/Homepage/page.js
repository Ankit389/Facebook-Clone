

import React from 'react';
import Header from '../components/Header'; // Correct import of Header component

const Homepage = () => {
  return (
    <div className='flex flex-col min-h-screen bg-background text-foreground'>
      {/* Include Header component */}
      <Header />
      
      <main>
        ankit
      </main>
    </div>
  );
}

export default Homepage;
