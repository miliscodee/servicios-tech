export default function Donar() {
  return (
    <main className="min-h-screen bg-[#F7F6F2]">

      {/* HERO */}
      <section className="relative bg-[#07182D] text-white py-32 overflow-hidden">

        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#C8A24C]/10 rounded-full blur-[120px]" />

        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-[#C8A24C]/5 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-8">

          <p className="text-[#C8A24C] uppercase tracking-[0.35em] text-sm font-semibold mb-6">
            Donaciones
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold leading-tight max-w-4xl">
            Tu apoyo puede
            <br />
            <span className="text-[#C8A24C]">
              transformar vidas.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-white/65 text-lg md:text-xl leading-relaxed">
            Cada aportación nos permite continuar apoyando a personas,
            familias y comunidades que se encuentran en situación de
            vulnerabilidad.
          </p>

          <a
            href="/donar/formulario"
            className="inline-flex mt-10 bg-[#C8A24C] text-[#07182D] px-8 py-4 rounded-full font-semibold hover:bg-[#D8B866] hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            Quiero donar
          </a>

        </div>
      </section>


      {/* IMPACTO */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-8">

          <div className="max-w-3xl">

            <p className="text-[#B18A32] uppercase tracking-[0.3em] text-sm font-semibold mb-5">
              El impacto de tu apoyo
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold text-[#07182D] leading-tight">
              Una aportación puede convertirse en una oportunidad.
            </h2>

            <p className="mt-6 text-gray-500 text-lg leading-relaxed">
              Fundación Mixhue A.C. trabaja para generar oportunidades
              y acompañar a personas y comunidades que necesitan apoyo.
              Tu donación contribuye al desarrollo de nuestras
              actividades y programas.
            </p>

          </div>


          {/* TARJETAS */}
          <div className="grid md:grid-cols-3 gap-6 mt-14">


            {/* ALIMENTACIÓN */}
            <div className="rounded-[2rem] bg-[#E8DCC8] p-8">

              <p className="text-[#6B5744] uppercase tracking-wider text-sm font-semibold">
                Alimentación
              </p>

              <h3 className="text-2xl font-semibold text-[#07182D] mt-4">
                Apoyo para familias
              </h3>

              <p className="text-[#6B5744] mt-4 leading-relaxed">
                Contribuye a iniciativas destinadas a brindar apoyo
                alimentario a personas y familias que lo necesitan.
              </p>

            </div>


            {/* EDUCACIÓN */}
            <div className="rounded-[2rem] bg-[#DCE7E2] p-8">

              <p className="text-[#527269] uppercase tracking-wider text-sm font-semibold">
                Educación
              </p>

              <h3 className="text-2xl font-semibold text-[#07182D] mt-4">
                Más oportunidades
              </h3>

              <p className="text-[#527269] mt-4 leading-relaxed">
                Tu apoyo puede contribuir a proyectos que impulsen
                el acceso a educación y nuevas oportunidades.
              </p>

            </div>


            {/* COMUNIDAD */}
            <div className="rounded-[2rem] bg-[#E4DCE8] p-8">

              <p className="text-[#695773] uppercase tracking-wider text-sm font-semibold">
                Comunidad
              </p>

              <h3 className="text-2xl font-semibold text-[#07182D] mt-4">
                Fortalecer comunidades
              </h3>

              <p className="text-[#695773] mt-4 leading-relaxed">
                Ayuda a impulsar actividades y proyectos dirigidos
                a comunidades en situación de vulnerabilidad.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="py-24 bg-[#07182D] text-white">

        <div className="max-w-4xl mx-auto px-8 text-center">

          <p className="text-[#C8A24C] uppercase tracking-[0.3em] text-sm font-semibold mb-5">
            Sé parte del cambio
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold">
            ¿Quieres contribuir?
          </h2>

          <p className="text-white/60 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Elige la cantidad que deseas aportar y continúa con
            el proceso de donación.
          </p>

          <a
            href="/donar/formulario"
            className="inline-flex mt-10 bg-white text-[#07182D] px-8 py-4 rounded-full font-semibold hover:bg-[#C8A24C] hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            Realizar una donación
          </a>

        </div>

      </section>

    </main>
  );
}