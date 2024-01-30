import React from 'react';
import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/provider';

export const metadata = {
  title: "MMS Recipe-App",
  description: 'Explore Food From Around the World!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>

          <main className='app'>
            <Nav/>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}