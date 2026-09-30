import Link from 'next/link';

export default function Nosotros() {
  return (
    <main className="min-h-screen bg-[#07182D] text-white">

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#C8A24C]/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-20 w-full">
          <p className="text-[#C8A24C] uppercase tracking-[0.25em] text-base font-semibold mb-4">
            Fundación Mixhue A.C.
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-4xl">
            Una historia construida{" "}
            <span className="text-[#C8A24C]">
              con solidaridad.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-white/80 text-base sm:text-lg leading-relaxed">
            Durante más de una década hemos trabajado para acompañar,
            apoyar y generar oportunidades para personas y comunidades
            en situación de vulnerabilidad.
          </p>
        </div>
      </section>


      {/* NUESTRA HISTORIA */}
      <section className="relative py-20 bg-white text-[#07182D]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#B18A32] uppercase tracking-[0.25em] text-base font-semibold mb-4">
                Nuestra historia
              </p>

              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Más de 10 años{" "}
                <span className="text-[#B18A32]">
                  ayudando a transformar vidas.
                </span>
              </h2>
            </div>

            <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-4">
              <p>
                Fundación Mixhue A.C. nace con el compromiso de contribuir
                al bienestar de personas que enfrentan situaciones de
                vulnerabilidad.
              </p>
              <p>
                Nuestro trabajo se enfoca especialmente en personas de
                escasos recursos, personas con discapacidad y comunidades
                rurales.
              </p>
              <p>
                A través de diferentes acciones y programas buscamos
                brindar herramientas que permitan construir mejores
                oportunidades para las familias y sus comunidades.
              </p>
              <p> 
                Fundación Mixhue fue creada en el año 2014 en Huehuepiaxtla, Axutla,
                Puebla por los hermanos Ballinas Aguilar. Es un proyecto creado por la 
                Mtra. Ana Guadalupe Ballinas Aguilar, quien ha dedicado recursos 
                económicos y esfuerzo para darle vida y continuidad al proyecto hasta ahora.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* MISIÓN / VISIÓN (DOS TARJETAS LADO A LADO) */}
      <section className="relative py-20 bg-[#07182D] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B2342] via-[#07182D] to-[#020B16]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
          {/* Grid de 2 columnas en pantallas medianas y grandes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

            {/* TARJETA 1: MISIÓN */}
            <div className="group backdrop-blur-xl bg-white/[0.06] border border-white/10 rounded-3xl p-8 sm:p-10 hover:bg-white/[0.09] transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#C8A24C]/15 flex items-center justify-center mb-6">
                  <span className="text-[#C8A24C] text-xl">✦</span>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">
                  Nuestra misión
                </h3>

                <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                  Ofrecer atención integral y digna a personas en situación 
                  de pobreza extrema mediante acciones de bienestar, impulsando
                  el desarrollo e inclusión social, transformando sus condiciones de vida
                  y restaurando su tejido social.
                </p>
              </div>
            </div>

            {/* TARJETA 2: VISIÓN */}
            <div className="group backdrop-blur-xl bg-white/[0.06] border border-white/10 rounded-3xl p-8 sm:p-10 hover:bg-white/[0.09] transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#C8A24C]/15 flex items-center justify-center mb-6">
                  <span className="text-[#C8A24C] text-xl">◇</span>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">
                  Nuestra visión
                </h3>

                <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                  Ser una organización referente en todo el país por su impacto integral,
                  en la erradicación de la vulnerabilidad, logrando que familias
                  en pobreza extrema alcancen una vida digna.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* VALORES */}
      <section className="py-20 bg-[#F7F7F5] text-[#07182D]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[#B18A32] uppercase tracking-[0.25em] text-base font-semibold mb-3">
              Lo que nos representa
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Nuestros valores
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Solidaridad",
                text: "Trabajamos juntos para apoyar a quienes más lo necesitan.",
              },
              {
                title: "Inclusión",
                text: "Creemos en oportunidades para todas las personas.",
              },
              {
                title: "Compromiso",
                text: "Actuamos con responsabilidad y dedicación.",
              },
              {
                title: "Dignidad",
                text: "Cada persona merece ser tratada con respeto.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-black/5 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-1 bg-[#C8A24C] mb-6 rounded-full" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="relative py-20 bg-[#07182D] text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#07182D] via-[#102D50] to-[#07182D]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8">
          <p className="text-[#C8A24C] uppercase tracking-[0.25em] text-base font-semibold mb-4">
            Sé parte del cambio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Juntos podemos llegar{" "}
            <span className="text-[#C8A24C]">
              mucho más lejos.
            </span>
          </h2>
          <p className="mt-4 text-white/80 text-base sm:text-lg">
            Tu apoyo puede convertirse en una oportunidad para alguien más.
          </p>
          <Link
            href="/donar"
            className="inline-flex mt-8 bg-[#C8A24C] text-[#07182D] px-8 py-3.5 rounded-full font-semibold text-base hover:-translate-y-0.5 hover:bg-[#D8B866] transition-all duration-300 shadow-xl"
          >
            Quiero ayudar
          </Link>
        </div>
      </section>

    </main>
  );
}
