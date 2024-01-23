import '@styles/globals.css';

export const metadata = {
  title: "MMS Recipe-App",
  description: 'Explore Food From Around the World!'
}

export default function RootLayout({children}) {
  return (
    <div>
      <html lang= "en">
        <body>
          <div className='main'>
            <div className='gradient'/>
          </div>
          <main className='app'>
            {children}
          </main>
        </body>
      </html>
      
    </div>
  )
}
