import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#07182D] text-white py-6 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        
        {/* Derechos reservados */}
        <div className="text-xs text-white/70 font-['Open_Sans']">
          <p>© {new Date().getFullYear()} Fundación Mixhue A.C. Todos los derechos reservados.</p>
        </div>

        {/* Enlaces Legales: TyC y Aviso de Privacidad */}
        <div className="flex items-center gap-6 text-xs text-white/80 font-medium">
          <Link href="/terminos" className="hover:text-[#C8A24C] transition-colors">
            Términos y Condiciones
          </Link>
          <span className="text-white/30">|</span>
          <Link href="/privacidad" className="hover:text-[#C8A24C] transition-colors">
            Aviso de Privacidad
          </Link>
        </div>

      </div>
    </footer>
  );
}