export default function FormularioDonacion() {
  return (
    <main className="min-h-screen bg-[#F7F6F2]">

      {/* HERO */}
      <section className="relative bg-[#07182D] text-white py-28 overflow-hidden">

        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#C8A24C]/10 rounded-full blur-[120px]" />

        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-[#C8A24C]/5 rounded-full blur-[100px]" />

        <div className="relative max-w-5xl mx-auto px-8 text-center">

          <p className="text-[#C8A24C] uppercase tracking-[0.35em] text-sm font-semibold mb-6">
            Donaciones
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            Realiza tu donación
          </h1>

          <p className="mt-7 max-w-2xl mx-auto text-white/65 text-lg md:text-xl leading-relaxed">
            Elige la cantidad que deseas aportar y selecciona
            la plataforma mediante la cual deseas realizar tu donación.
          </p>

        </div>
      </section>


      {/* FORMULARIO */}
      <section className="py-24">

        <div className="max-w-5xl mx-auto px-8">

          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-black/5">

            {/* CANTIDAD */}
            <div>

              <p className="text-[#B18A32] uppercase tracking-[0.3em] text-sm font-semibold mb-4">
                01 — Cantidad
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold text-[#07182D]">
                ¿Cuánto deseas donar?
              </h2>

              <p className="text-gray-500 mt-4">
                Selecciona una cantidad o introduce el monto que prefieras.
              </p>

            </div>


            {/* CANTIDADES */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

              <button
                type="button"
                className="rounded-2xl border border-gray-200 px-6 py-5 text-xl font-semibold text-[#07182D] hover:border-[#C8A24C] hover:bg-[#C8A24C]/5 transition"
              >
                $100
              </button>

              <button
                type="button"
                className="rounded-2xl border border-gray-200 px-6 py-5 text-xl font-semibold text-[#07182D] hover:border-[#C8A24C] hover:bg-[#C8A24C]/5 transition"
              >
                $250
              </button>

              <button
                type="button"
                className="rounded-2xl border border-gray-200 px-6 py-5 text-xl font-semibold text-[#07182D] hover:border-[#C8A24C] hover:bg-[#C8A24C]/5 transition"
              >
                $500
              </button>

              <button
                type="button"
                className="rounded-2xl border border-gray-200 px-6 py-5 text-xl font-semibold text-[#07182D] hover:border-[#C8A24C] hover:bg-[#C8A24C]/5 transition"
              >
                $1,000
              </button>

            </div>


            {/* OTRA CANTIDAD */}
            <div className="mt-6">

              <label className="block text-sm font-medium text-[#07182D] mb-2">
                Otra cantidad
              </label>

              <div className="relative">

                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                  $
                </span>

                <input
                  type="number"
                  min="1"
                  placeholder="Introduce una cantidad"
                  className="w-full rounded-xl border border-gray-200 pl-10 pr-5 py-4 text-[#07182D] placeholder:text-gray-400 bg-white outline-none focus:border-[#C8A24C] focus:ring-2 focus:ring-[#C8A24C]/10 transition"
                />

              </div>

            </div>


            {/* DATOS DEL DONANTE */}
            <div className="mt-16">

              <p className="text-[#B18A32] uppercase tracking-[0.3em] text-sm font-semibold mb-4">
                02 — Datos
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold text-[#07182D]">
                Información del donante
              </h2>

              <p className="text-gray-500 mt-4">
                Estos datos nos permitirán identificar y administrar
                correctamente la donación.
              </p>

            </div>


            <div className="grid md:grid-cols-2 gap-6 mt-8">

              {/* NOMBRE */}
              <div>

                <label className="block text-sm font-medium text-[#07182D] mb-2">
                  Nombre completo
                </label>

                <input
                  type="text"
                  placeholder="Tu nombre completo"
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


            {/* MÉTODO DE PAGO */}
            <div className="mt-16">

              <p className="text-[#B18A32] uppercase tracking-[0.3em] text-sm font-semibold mb-4">
                03 — Método de donación
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold text-[#07182D]">
                ¿Cómo quieres realizar tu donación?
              </h2>

              <p className="text-gray-500 mt-4 max-w-2xl leading-relaxed">
                Selecciona la plataforma que prefieras. El proceso de
                pago se realizará mediante el proveedor correspondiente.
              </p>

            </div>


            {/* TARJETAS DE PAGO */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">


              {/* PAYPAL */}
              <a
                href="URL_DE_PAYPAL"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[1.5rem] border border-gray-200 p-7 hover:border-[#C8A24C] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >

                <div className="flex items-center justify-between gap-5">

                  <div className="flex items-center gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-sm">

                      <img
                        src="/images/paypal.png"
                        alt="PayPal"
                        className="max-w-[48px] max-h-[40px] object-contain"
                      />

                    </div>

                    <div>

                      <p className="text-sm text-gray-400">
                        Plataforma de pago
                      </p>

                      <h3 className="text-xl font-semibold text-[#07182D] mt-1">
                        PayPal
                      </h3>

                    </div>

                  </div>

                  <span className="text-gray-300 text-2xl group-hover:text-[#C8A24C] group-hover:translate-x-1 transition-all">
                    →
                  </span>

                </div>

                <p className="text-gray-500 text-sm mt-5 leading-relaxed">
                  Realiza tu donación mediante PayPal.
                </p>

              </a>


              {/* MERCADO PAGO */}
              <a
                href="URL_DE_MERCADOPAGO"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[1.5rem] border border-gray-200 p-7 hover:border-[#C8A24C] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >

                <div className="flex items-center justify-between gap-5">

                  <div className="flex items-center gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-sm">

                      <img
                        src="/images/mercadopago.png"
                        alt="Mercado Pago"
                        className="max-w-[52px] max-h-[42px] object-contain"
                      />

                    </div>

                    <div>

                      <p className="text-sm text-gray-400">
                        Plataforma de pago
                      </p>

                      <h3 className="text-xl font-semibold text-[#07182D] mt-1">
                        Mercado Pago
                      </h3>

                    </div>

                  </div>

                  <span className="text-gray-300 text-2xl group-hover:text-[#C8A24C] group-hover:translate-x-1 transition-all">
                    →
                  </span>

                </div>

                <p className="text-gray-500 text-sm mt-5 leading-relaxed">
                  Realiza tu donación mediante Mercado Pago.
                </p>

              </a>

            </div>


            {/* AVISO */}
            <div className="mt-10 p-5 rounded-2xl bg-[#F7F6F2] border border-black/5">

              <p className="text-sm text-gray-500 leading-relaxed">
                Al continuar con tu donación serás dirigido al servicio
                de pago seleccionado. Fundación Mixhue A.C. no solicitará
                ni almacenará directamente los datos financieros de tu
                tarjeta en este formulario.
              </p>

            </div>


            {/* PRIVACIDAD */}
            <div className="mt-6">

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
            <div className="mt-10">

              <button
                type="button"
                className="w-full md:w-auto bg-[#07182D] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#102D50] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                Continuar con la donación
              </button>

            </div>

            <p className="text-xs text-gray-400 mt-5">
              Por ahora este botón es únicamente visual. La conexión
              con PayPal y Mercado Pago se agregará posteriormente.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

