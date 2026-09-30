import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#07182D] text-white py-12 sm:py-16 border-t-2 border-[#C8A24C] mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col items-center gap-8 text-center">
        
        {/* Identidad e historia */}
        <div className="flex flex-col items-center gap-3 max-w-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-['Montserrat'] text-[#C8A24C] tracking-tight">
            Fundación Mixhue A.C.
          </h3>
          <p className="text-sm sm:text-base text-slate-300 font-['Open_Sans'] leading-relaxed">
            Donde la solidaridad se convierte en acción. Creando oportunidades y apoyo comunitario desde 2014.
          </p>
        </div>

        {/* Separador estético dorado */}
        <div className="w-24 h-1 bg-[#C8A24C] rounded-full opacity-80"></div>

        {/* Enlaces Legales */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-semibold font-['Open_Sans']">
          <Link 
            href="/terminosycondiciones" 
            className="text-slate-200 hover:text-[#C8A24C] transition-all duration-200 hover:underline underline-offset-4"
          >
            Términos y Condiciones
          </Link>
          <span className="text-[#C8A24C]/40 select-none">•</span>
          <Link 
            href="/privacidad" 
            className="text-slate-200 hover:text-[#C8A24C] transition-all duration-200 hover:underline underline-offset-4"
          >
            Aviso de Privacidad
          </Link>
        </div>

        {/* Derechos de Autor */}
        <div className="border-t border-slate-800 pt-6 w-full text-xs text-slate-400 font-['Open_Sans']">
          <p>© {new Date().getFullYear()} Fundación Mixhue A.C. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
}