
export default function Home() {
  return (
    <main className="bg-[#07182D]">

      

      <section className="relative min-h-screen overflow-hidden">

        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
          }}
        />

        {/* Degradado */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07182D] via-[#07182D]/70 to-[#07182D]/10" />

        {/* Contenido */}
        <div className="relative z-10 min-h-screen flex items-center">

          <div className="w-full max-w-7xl mx-auto px-8 pt-28">

            <div className="max-w-3xl">

              <p className="text-[#C8A24C] uppercase tracking-[0.3em] text-sm font-semibold mb-6">
                +10 años transformando vidas
              </p>

              <h1 className="text-white text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
                Donde la solidaridad
                <br />
                <span className="text-[#C8A24C]">
                  se convierte en acción.
                </span>
              </h1>

              <p className="mt-8 text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl">
                Trabajamos junto a personas, familias y comunidades en
                situación de vulnerabilidad, creando oportunidades para
                construir un futuro con mayor dignidad.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <a
                  href="/donar/formulario"
                  className="inline-flex items-center justify-center
                  bg-[#C8A24C] text-[#07182D]
                  px-8 py-4 rounded-full
                  font-semibold
                  shadow-[0_10px_40px_rgba(200,162,76,0.25)]
                  hover:bg-[#d8b866]
                  hover:-translate-y-1
                  transition-all duration-300"
                >
                  Donar ahora
                </a>

                <a
                  href="/nosotros"
                  className="inline-flex items-center justify-center
                  border border-white/30
                  bg-white/5 backdrop-blur-md
                  text-white
                  px-8 py-4 rounded-full
                  font-medium
                  hover:bg-white/10
                  hover:border-white/50
                  transition-all duration-300"
                >
                  Conoce nuestra historia
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Indicador inferior */}
        <a href="/programas" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.3em] uppercase">
          Descubre nuestra labor
        </a>

      </section>

    

    </main>
  );
}