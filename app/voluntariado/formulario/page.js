export default function FormularioVoluntariado() {
  return (
    <main className="min-h-screen bg-[#F7F6F2]">

      {/* HERO */}
      <section className="relative bg-[#07182D] text-white py-28 overflow-hidden">

        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#C8A24C]/10 rounded-full blur-[120px]" />

        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-[#C8A24C]/5 rounded-full blur-[100px]" />

        <div className="relative max-w-5xl mx-auto px-8 text-center">

          <p className="text-[#C8A24C] uppercase tracking-[0.35em] text-sm font-semibold mb-6">
            Voluntariado
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            Queremos conocerte.
          </h1>

          <p className="mt-7 max-w-2xl mx-auto text-white/65 text-lg md:text-xl leading-relaxed">
            Si deseas formar parte de Fundación Mixhue A.C. y contribuir
            con nuestra labor, completa el siguiente formulario.
          </p>

        </div>
      </section>


      {/* FORMULARIO */}
      <section className="py-24">

        <div className="max-w-4xl mx-auto px-8">

          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-black/5">

            {/* ENCABEZADO */}
            <div className="mb-12">

              <p className="text-[#B18A32] uppercase tracking-[0.3em] text-sm font-semibold mb-4">
                Solicitud
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold text-[#07182D]">
                Formulario de voluntariado
              </h2>

              <p className="text-gray-500 mt-4 leading-relaxed">
                Proporciona la siguiente información para que podamos
                conocer tus intereses y la manera en que podrías colaborar
                con nuestra Fundación.
              </p>

            </div>


            {/* DATOS PERSONALES */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* NOMBRE */}
              <div>

                <label className="block text-sm font-medium text-[#07182D] mb-2">
                  Nombre completo *
                </label>

                <input
                  type="text"
                  placeholder="Tu nombre completo"
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 text-[#07182D] placeholder:text-gray-400 bg-white outline-none focus:border-[#C8A24C] focus:ring-2 focus:ring-[#C8A24C]/10 transition"
                />

              </div>


              {/* EDAD */}
              <div>

                <label className="block text-sm font-medium text-[#07182D] mb-2">
                  Edad *
                </label>

                <input
                  type="number"
                  placeholder="Tu edad"
                  min="1"
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 text-[#07182D] placeholder:text-gray-400 bg-white outline-none focus:border-[#C8A24C] focus:ring-2 focus:ring-[#C8A24C]/10 transition"
                />

              </div>


              {/* CORREO */}
              <div>

                <label className="block text-sm font-medium text-[#07182D] mb-2">
                  Correo electrónico *
                </label>

                <input
                  type="email"
                  placeholder="tu@correo.com"
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 text-[#07182D] placeholder:text-gray-400 bg-white outline-none focus:border-[#C8A24C] focus:ring-2 focus:ring-[#C8A24C]/10 transition"
                />

              </div>


              {/* TELÉFONO */}
              <div>

                <label className="block text-sm font-medium text-[#07182D] mb-2">
                  Teléfono *
                </label>

                <input
                  type="tel"
                  placeholder="+52"
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 text-[#07182D] placeholder:text-gray-400 bg-white outline-none focus:border-[#C8A24C] focus:ring-2 focus:ring-[#C8A24C]/10 transition"
                />

              </div>

            </div>


            {/* UBICACIÓN */}
            <div className="mt-6">

              <label className="block text-sm font-medium text-[#07182D] mb-2">
                Ciudad y estado *
              </label>

              <input
                type="text"
                placeholder="Ej. Puebla, Puebla"
                className="w-full rounded-xl border border-gray-200 px-5 py-4 text-[#07182D] placeholder:text-gray-400 bg-white outline-none focus:border-[#C8A24C] focus:ring-2 focus:ring-[#C8A24C]/10 transition"
              />

            </div>


            {/* ÁREA DE INTERÉS */}
            <div className="mt-6">

              <label className="block text-sm font-medium text-[#07182D] mb-2">
                ¿En qué área te gustaría colaborar? *
              </label>

              <select
                className="w-full rounded-xl border border-gray-200 px-5 py-4 text-[#07182D] bg-white outline-none focus:border-[#C8A24C] focus:ring-2 focus:ring-[#C8A24C]/10 transition"
              >

                <option value="">
                  Selecciona una opción
                </option>

                <option value="educacion">
                  Educación
                </option>

                <option value="alimentos">
                  Apoyo alimentario
                </option>

                <option value="ropa">
                  Donación y distribución de ropa
                </option>

                <option value="comunidad">
                  Trabajo comunitario
                </option>

                <option value="eventos">
                  Eventos y actividades
                </option>

                <option value="administrativo">
                  Apoyo administrativo
                </option>

                <option value="otro">
                  Otra área
                </option>

              </select>

            </div>


            {/* DISPONIBILIDAD */}
            <div className="mt-6">

              <label className="block text-sm font-medium text-[#07182D] mb-2">
                Disponibilidad *
              </label>

              <select
                className="w-full rounded-xl border border-gray-200 px-5 py-4 text-[#07182D] bg-white outline-none focus:border-[#C8A24C] focus:ring-2 focus:ring-[#C8A24C]/10 transition"
              >

                <option value="">
                  Selecciona tu disponibilidad
                </option>

                <option value="entre-semana">
                  Entre semana
                </option>

                <option value="fines">
                  Fines de semana
                </option>

                <option value="ambos">
                  Entre semana y fines de semana
                </option>

                <option value="ocasional">
                  De manera ocasional
                </option>

              </select>

            </div>


            {/* EXPERIENCIA */}
            <div className="mt-6">

              <label className="block text-sm font-medium text-[#07182D] mb-2">
                ¿Has participado anteriormente como voluntario?
              </label>

              <select
                className="w-full rounded-xl border border-gray-200 px-5 py-4 text-[#07182D] bg-white outline-none focus:border-[#C8A24C] focus:ring-2 focus:ring-[#C8A24C]/10 transition"
              >

                <option value="">
                  Selecciona una opción
                </option>

                <option value="si">
                  Sí
                </option>

                <option value="no">
                  No
                </option>

              </select>

            </div>


            {/* MENSAJE */}
            <div className="mt-6">

              <label className="block text-sm font-medium text-[#07182D] mb-2">
                Cuéntanos un poco sobre ti
              </label>

              <textarea
                rows="6"
                placeholder="Cuéntanos por qué te gustaría colaborar con Fundación Mixhue A.C."
                className="w-full rounded-xl border border-gray-200 px-5 py-4 text-[#07182D] placeholder:text-gray-400 bg-white outline-none focus:border-[#C8A24C] focus:ring-2 focus:ring-[#C8A24C]/10 transition resize-none"
              />

            </div>


            {/* AVISO DE PRIVACIDAD */}
            <div className="mt-8 p-5 rounded-2xl bg-[#F7F6F2] border border-black/5">

              <label className="flex items-start gap-3 cursor-pointer">

                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 accent-[#C8A24C]"
                />

                <span className="text-sm text-gray-500 leading-relaxed">
                  He leído y acepto el{" "}
                  <a
                    href="/privacidad"
                    className="text-[#B18A32] font-medium hover:underline"
                  >
                    Aviso de Privacidad
                  </a>{" "}
                  de Fundación Mixhue A.C.
                </span>

              </label>

            </div>


            {/* BOTÓN */}
            <button
              type="button"
              className="mt-8 w-full md:w-auto bg-[#07182D] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#102D50] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              Enviar solicitud
            </button>

            <p className="text-xs text-gray-400 mt-5">
              * Campos obligatorios.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}