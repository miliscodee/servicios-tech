export default function Contacto() {
  return (
    <main className="min-h-screen bg-[#F7F6F2] text-gray-700">

      {/* HERO */}
      <section className="relative bg-[#07182D] text-white py-32 overflow-hidden">

        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#C8A24C]/10 rounded-full blur-[120px]" />

        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-[#C8A24C]/5 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-8">

          <p className="text-[#C8A24C] uppercase tracking-[0.35em] text-sm font-semibold mb-6">
            Contacto
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold leading-tight max-w-4xl">
            Estamos aquí
            <br />
            <span className="text-[#C8A24C]">
              para escucharte.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-white/65 text-lg md:text-xl leading-relaxed">
            Si quieres conocer más sobre nuestra labor, colaborar con
            Fundación Mixhue A.C. o necesitas información, puedes
            comunicarte con nosotros.
          </p>

        </div>
      </section>


      {/* INFORMACIÓN */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-8">

          <div className="grid lg:grid-cols-2 gap-16">


            {/* INFORMACIÓN DE CONTACTO */}
            <div>

              <p className="text-[#B18A32] uppercase tracking-[0.3em] text-sm font-semibold mb-5">
                Información
              </p>

              <h2 className="text-4xl md:text-5xl font-semibold text-[#07182D] leading-tight">
                Ponte en contacto
                <br />
                con nosotros.
              </h2>


              <div className="mt-12 space-y-8">


                {/* CORREO */}
                <div className="flex gap-5 items-start">

                  <div className="w-12 h-12 rounded-2xl bg-[#E8DCC8] flex items-center justify-center shrink-0">

                    <span className="text-[#6B5744] text-lg">
                      @
                    </span>

                  </div>


                  <div>

                    <p className="text-sm text-gray-400 uppercase tracking-wider">
                      Correo electrónico
                    </p>

                    <a
                      href="mailto:correo@fundacionmixhue.org"
                      className="text-[#07182D] text-lg font-medium mt-1 inline-block hover:text-[#B18A32] transition"
                    >
                      correo@fundacionmixhue.org
                    </a>

                  </div>

                </div>


                {/* TELÉFONO */}
                <div className="flex gap-5 items-start">

                  <div className="w-12 h-12 rounded-2xl bg-[#DCE7E2] flex items-center justify-center shrink-0">

                    <span className="text-[#527269] text-lg">
                      +
                    </span>

                  </div>


                  <div>

                    <p className="text-sm text-gray-400 uppercase tracking-wider">
                      Teléfono
                    </p>

                    <p className="text-[#07182D] text-lg font-medium mt-1">
                      +52 275 105 9205
                      <br />
                      +52 55 2128 1715
                    </p>

                  </div>

                </div>


                {/* UBICACIÓN */}
                <div className="flex gap-5 items-start">

                  <div className="w-12 h-12 rounded-2xl bg-[#E4DCE8] flex items-center justify-center shrink-0">

                    <span className="text-[#695773] text-lg">
                      ●
                    </span>

                  </div>


                  <div>

                    <p className="text-sm text-gray-400 uppercase tracking-wider">
                      Ubicación
                    </p>

                    <p className="text-[#07182D] text-lg font-medium mt-1">
                      Calle Tepeyac #49,
                      <br />
                      Huehuepiaxtla, Axutla,
                      <br />
                      Puebla, México.
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* REDES SOCIALES */}
            <div className="bg-[#07182D] rounded-[2rem] p-10 md:p-12 text-white relative overflow-hidden">

              <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#C8A24C]/10 rounded-full blur-[90px]" />

              <div className="relative">

                <p className="text-[#C8A24C] uppercase tracking-[0.3em] text-sm font-semibold mb-5">
                  Redes sociales
                </p>

                <h2 className="text-3xl md:text-4xl font-semibold">
                  Síguenos y conoce
                  <br />
                  nuestro trabajo.
                </h2>

                <p className="text-white/60 mt-6 text-lg leading-relaxed">
                  A través de nuestras redes compartimos actividades,
                  proyectos, campañas y las historias de las personas
                  y comunidades que acompañamos.
                </p>


                {/* REDES */}
                <div className="mt-10 space-y-4">


                  {/* INSTAGRAM */}
                  <a
                    href="URL_DE_INSTAGRAM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-[#C8A24C]/40 transition-all duration-300"
                  >

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">

                        <img
                          src="/images/instagram.png"
                          alt="Instagram"
                          className="w-7 h-7 object-contain"
                        />

                      </div>

                      <div>

                        <p className="text-sm text-white/40">
                          Instagram
                        </p>

                        <p className="font-medium">
                          @usuario
                        </p>

                      </div>

                    </div>


                    <span className="text-white/40 group-hover:text-[#C8A24C] group-hover:translate-x-1 transition-all text-xl">
                      →
                    </span>

                  </a>


                  {/* FACEBOOK */}
                  <a
                    href="URL_DE_FACEBOOK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-[#C8A24C]/40 transition-all duration-300"
                  >

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">

                        <img
                          src="/images/facebook.png"
                          alt="Facebook"
                          className="w-7 h-7 object-contain"
                        />

                      </div>

                      <div>

                        <p className="text-sm text-white/40">
                          Facebook
                        </p>

                        <p className="font-medium">
                          Fundación Mixhue A.C.
                        </p>

                      </div>

                    </div>


                    <span className="text-white/40 group-hover:text-[#C8A24C] group-hover:translate-x-1 transition-all text-xl">
                      →
                    </span>

                  </a>


                  {/* TIKTOK */}
                  <a
                    href="URL_DE_TIKTOK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-[#C8A24C]/40 transition-all duration-300"
                  >

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">

                        <img
                          src="/images/tiktok.png"
                          alt="TikTok"
                          className="w-7 h-7 object-contain"
                        />

                      </div>

                      <div>

                        <p className="text-sm text-white/40">
                          TikTok
                        </p>

                        <p className="font-medium">
                          @usuario
                        </p>

                      </div>

                    </div>


                    <span className="text-white/40 group-hover:text-[#C8A24C] group-hover:translate-x-1 transition-all text-xl">
                      →
                    </span>

                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FORMULARIO */}
      <section className="py-24 bg-[#F7F6F2]">

        <div className="max-w-4xl mx-auto px-8">

          <div className="text-center mb-14">

            <p className="text-[#B18A32] uppercase tracking-[0.3em] text-sm font-semibold mb-5">
              Escríbenos
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold text-[#07182D]">
              ¿Tienes alguna pregunta?
            </h2>

            <p className="text-gray-500 text-lg mt-5">
              Estamos para escucharte.
            </p>

          </div>


          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-black/5">

            <div className="grid md:grid-cols-2 gap-6">


              {/* NOMBRE */}
              <div>

                <label className="block text-sm font-medium text-[#07182D] mb-2">
                  Nombre
                </label>

                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 text-[#07182D] placeholder:text-gray-400 bg-white outline-none focus:border-[#C8A24C] focus:ring-2 focus:ring-[#C8A24C]/10 transition"
                />

              </div>


              {/* CORREO */}
              <div>

                <label className="block text-sm font-medium text-[#07182D] mb-2">
                  Correo electrónico
                </label>

                <input
                  type="email"
                  placeholder="tu@correo.com"
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 text-[#07182D] placeholder:text-gray-400 bg-white outline-none focus:border-[#C8A24C] focus:ring-2 focus:ring-[#C8A24C]/10 transition"
                />

              </div>

            </div>


            {/* ASUNTO */}
            <div className="mt-6">

              <label className="block text-sm font-medium text-[#07182D] mb-2">
                Asunto
              </label>

              <input
                type="text"
                placeholder="¿En qué podemos ayudarte?"
                className="w-full rounded-xl border border-gray-200 px-5 py-4 text-[#07182D] placeholder:text-gray-400 bg-white outline-none focus:border-[#C8A24C] focus:ring-2 focus:ring-[#C8A24C]/10 transition"
              />

            </div>


            {/* MENSAJE */}
            <div className="mt-6">

              <label className="block text-sm font-medium text-[#07182D] mb-2">
                Mensaje
              </label>

              <textarea
                rows="6"
                placeholder="Escribe tu mensaje..."
                className="w-full rounded-xl border border-gray-200 px-5 py-4 text-[#07182D] placeholder:text-gray-400 bg-white outline-none focus:border-[#C8A24C] focus:ring-2 focus:ring-[#C8A24C]/10 transition resize-none"
              />

            </div>


            {/* BOTÓN */}
            <button
              type="button"
              className="mt-8 bg-[#07182D] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#102D50] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              Enviar mensaje
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}