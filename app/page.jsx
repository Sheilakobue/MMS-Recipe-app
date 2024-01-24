import React from 'react';
import Feed from '@components/Feed';

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        MMS Dynamic 
        <br className="max-md:hidden" />
        <br/>
        <span className="orange_gradient text-center">
          Recipe App
        </span>
      </h1>
      <p className="desc text-center">Explore Food From Around the World!</p>
    
    <Feed/>
    </section>
  );
}
