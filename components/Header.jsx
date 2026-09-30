'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#07182D]/85 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* LOGOTIPO Y NOMBRE REESTRUCTURADO */}
        <Link href="/" className="flex items-center gap-3.5 group shrink-0">
          <img 
            src="/logo.png" 
            alt="Logo Fundación Mixhue" 
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            onError={(e) => { e.currentTarget.style.display = 'none'; }} 
          />
          <div className="flex flex-col justify-center">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-[#C8A24C] leading-none mb-0.5">
              Fundación
            </span>
            <span className="text-lg sm:text-xl font-extrabold text-white tracking-wide leading-none group-hover:text-[#C8A24C] transition-colors">
              Mixhue <span className="text-xs font-medium text-white/60">A.C.</span>
            </span>
          </div>
        </Link>

        {/* MENÚ DE NAVEGACIÓN COMPLETO */}
        <nav className="flex items-center gap-3 sm:gap-6 text-[15px] font-medium text-white/90 shrink-0">
          <Link href="/nosotros" className="hover:text-[#C8A24C] transition-colors whitespace-nowrap">
            Nosotros
          </Link>
          <Link href="/programas" className="hover:text-[#C8A24C] transition-colors whitespace-nowrap">
            Programas
          </Link>
          <Link href="/voluntariado" className="hover:text-[#C8A24C] transition-colors whitespace-nowrap">
            Voluntariado
          </Link>
          <Link href="/contacto" className="hover:text-[#C8A24C] transition-colors whitespace-nowrap">
            Contacto
          </Link>
          <Link 
            href="/donar" 
            className="bg-[#C8A24C] text-[#07182D] px-4 py-2 rounded-full font-semibold text-[15px] hover:bg-[#D8B866] hover:scale-105 transition-all shadow-lg whitespace-nowrap"
          >
            Quiero ayudar
          </Link>
        </nav>

      </div>
    </header>
  );
}