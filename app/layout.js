import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-[#07182D] text-white min-h-screen flex flex-col m-0">
        <Header />
        <main className="flex-grow pt-24 sm:pt-28 px-4 sm:px-8 max-w-7xl mx-auto w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}