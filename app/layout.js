import './globals.css';
import Header from '../components/Header';
export const metadata = {
  title: 'Fundación Mixhue A.C.',
  description: 'Sitio web oficial de Fundación Mixhue A.C.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[#07182D] text-white antialiased">
        <Header />
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}