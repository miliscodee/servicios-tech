export default function Voluntariado() {
  return (
    <main className="min-h-screen bg-[#F7F6F2]">

      {/* HERO */}
      <section className="relative bg-[#07182D] text-white py-32 overflow-hidden">

        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#C8A24C]/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-8">

          <p className="text-[#C8A24C] uppercase tracking-[0.35em] text-sm font-semibold mb-6">
            Voluntariado
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold leading-tight max-w-4xl">
            Tu tiempo puede
            <br />
            <span className="text-[#C8A24C]">
              transformar una vida.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-white/65 text-lg md:text-xl leading-relaxed">
            Forma parte de Fundación Mixhue A.C. y contribuye con tu
            tiempo, conocimientos y talento para apoyar a quienes más
            lo necesitan.
          </p>

        </div>
      </section>


      {/* INTRODUCCIÓN */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <p className="text-[#B18A32] uppercase tracking-[0.3em] text-sm font-semibold mb-5">
                Sé parte de nuestra comunidad
              </p>

              <h2 className="text-4xl md:text-5xl font-semibold text-[#07182D] leading-tight">
                Hay muchas formas
                <br />
                de ayudar.
              </h2>

            </div>

            <div>

              <p className="text-gray-600 text-lg leading-relaxed">
                Nuestro trabajo es posible gracias a personas que
                comparten nuestro compromiso con las comunidades y
                familias que acompañamos.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mt-5">
                No necesitas tener experiencia previa. Lo más importante
                es contar con disposición, responsabilidad y ganas de
                contribuir.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* FORMAS DE PARTICIPAR */}
      <section className="py-24 bg-[#F7F6F2]">

        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">

            <p className="text-[#B18A32] uppercase tracking-[0.3em] text-sm font-semibold mb-5">
              ¿Cómo puedes ayudar?
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold text-[#07182D]">
              Tu talento también cuenta.
            </h2>

          </div>


          <div className="grid md:grid-cols-3 gap-8">

            {/* TARJETA 1 */}
            <div className="bg-[#E8DCC8] rounded-[2rem] p-10 min-h-[330px] flex flex-col justify-between hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl">

              <span className="text-[#6B5744] text-sm font-semibold tracking-widest">
                01
              </span>

              <div>

                <h3 className="text-3xl font-semibold text-[#4A3828]">
                  Tu tiempo
                </h3>

                <p className="text-[#6B5744] mt-5 text-lg leading-relaxed">
                  Participa en actividades, jornadas y acciones
                  organizadas por la Fundación.
                </p>

              </div>

            </div>


            {/* TARJETA 2 */}
            <div className="bg-[#DCE7E2] rounded-[2rem] p-10 min-h-[330px] flex flex-col justify-between hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl">

              <span className="text-[#527269] text-sm font-semibold tracking-widest">
                02
              </span>

              <div>

                <h3 className="text-3xl font-semibold text-[#24443B]">
                  Tus conocimientos
                </h3>

                <p className="text-[#527269] mt-5 text-lg leading-relaxed">
                  Comparte tus habilidades y conocimientos para
                  fortalecer nuestras actividades.
                </p>

              </div>

            </div>


            {/* TARJETA 3 */}
            <div className="bg-[#E4DCE8] rounded-[2rem] p-10 min-h-[330px] flex flex-col justify-between hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl">

              <span className="text-[#695773] text-sm font-semibold tracking-widest">
                03
              </span>

              <div>

                <h3 className="text-3xl font-semibold text-[#403249]">
                  Tu compromiso
                </h3>

                <p className="text-[#695773] mt-5 text-lg leading-relaxed">
                  Conviértete en parte de una comunidad comprometida
                  con generar un impacto positivo.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* LLAMADA A LA ACCIÓN */}
      <section className="relative py-28 bg-[#07182D] text-white overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-[#0B2342] to-[#07182D]" />

        <div className="relative max-w-4xl mx-auto px-8 text-center">

          <p className="text-[#C8A24C] uppercase tracking-[0.3em] text-sm font-semibold mb-5">
            Da el siguiente paso
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold">
            ¿Quieres formar parte
            <br />
            <span className="text-[#C8A24C]">
              de Fundación Mixhue?
            </span>
          </h2>

          <p className="text-white/60 text-lg mt-6 max-w-2xl mx-auto">
            Déjanos tus datos y nos pondremos en contacto contigo para
            conocer cómo puedes participar.
          </p>

          <a
            href="/voluntariado/formulario"
            className="inline-flex mt-10 bg-[#C8A24C] text-[#07182D] px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:bg-[#D8B866] transition-all duration-300 shadow-xl"
          >
            Quiero ser voluntario
          </a>

        </div>

      </section>

    </main>
  );
}