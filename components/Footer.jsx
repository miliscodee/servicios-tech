export default function Footer() {
  return (
    <footer className="bg-[#040F1D] text-white border-t border-white/10">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Fundación */}
          <div>
            <h3 className="text-xl font-semibold">
              Fundación Mixhue A.C.
            </h3>

            <p className="text-white/50 mt-4 leading-relaxed">
              Trabajamos para generar oportunidades y bienestar
              para personas y comunidades en situación de vulnerabilidad.
            </p>
          </div>


          {/* Navegación */}
          <div>
            <h4 className="text-[#C8A24C] font-semibold mb-5">
              Explora
            </h4>

            <div className="flex flex-col gap-3 text-white/60">

              <a href="/" className="hover:text-white transition">
                Inicio
              </a>

              <a href="/nosotros" className="hover:text-white transition">
                Nosotros
              </a>

              <a href="/programas" className="hover:text-white transition">
                Programas
              </a>

              <a
                href="/voluntariado"
                className="hover:text-white transition"
              >
                Voluntariado
              </a>

              <a href="/contacto" className="hover:text-white transition">
                Contacto
              </a>

            </div>
          </div>


          {/* Participa */}
          <div>
            <h4 className="text-[#C8A24C] font-semibold mb-5">
              Participa
            </h4>

            <div className="flex flex-col gap-3 text-white/60">

              <a href="/donar" className="hover:text-white transition">
                Donar
              </a>

              <a
                href="/voluntariado"
                className="hover:text-white transition"
              >
                Sé voluntario
              </a>

            </div>
          </div>

          

        </div>


        {/* Línea inferior */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between gap-4">

          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Fundación Mixhue A.C. Todos los derechos reservados.
          </p>

          <div className="flex gap-6 text-white/40 text-sm">

            <a
              href="/privacidad"
              className="hover:text-white transition"
            >
              Aviso de privacidad
            </a>

            <a
              href="/terminosycondiciones"
              className="hover:text-white transition"
            >
              Términos y condiciones
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}