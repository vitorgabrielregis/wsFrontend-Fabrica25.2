import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import "./styles/globals.css";

export default function RootLayout({children}) {
  return (
    <html lang="pt">
      <head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>Pokédex</title>
      </head>
      <body>
        <Navbar />
        <main className='main-container'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
