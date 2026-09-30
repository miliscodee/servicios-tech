export default function Privacidad() {
  return (
    <main className="min-h-screen bg-[#F7F6F2] text-gray-700">

      {/* ENCABEZADO */}
      <section className="relative overflow-hidden bg-[#07182D] text-white py-28">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#C8A24C]/10 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-[#C8A24C]/5 blur-[100px]" />

        <div className="relative max-w-5xl mx-auto px-8">
          <p className="text-[#C8A24C] uppercase tracking-[0.3em] text-sm font-semibold mb-5">
            Información legal
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            Aviso de privacidad
          </h1>

          <p className="mt-6 text-white/60 text-lg">
            Fundación Mixhue A.C.
          </p>
        </div>
      </section>


      {/* DOCUMENTO */}
      <section className="py-20">
        <article className="max-w-5xl mx-auto px-6 md:px-8">

          <div className="bg-white rounded-[2rem] shadow-sm border border-black/5 p-8 md:p-14">

            {/* INTRODUCCIÓN */}
            <div className="mb-14">
              <p className="text-sm text-gray-400 mb-8">
                <strong>Última actualización:</strong> [FECHA]
              </p>

              <p className="leading-relaxed mb-5">
                Fundación Mixhue A.C., en adelante{" "}
                <strong>“Fundación Mixhue”</strong>, con domicilio en{" "}
                <strong>[DOMICILIO COMPLETO]</strong>, es responsable del
                tratamiento y protección de los datos personales que sean
                recabados a través de su sitio web, formularios, medios de
                contacto y demás mecanismos utilizados para la prestación de
                sus servicios y el desarrollo de sus actividades.
              </p>

              <p className="leading-relaxed">
                El presente Aviso de Privacidad tiene como finalidad informar
                a las personas titulares de los datos personales sobre la
                forma en que Fundación Mixhue recaba, utiliza, almacena,
                protege y, en su caso, comunica sus datos personales.
              </p>
            </div>


            {/* 1 */}
            <section className="mb-14">
              <h2 className="text-3xl font-semibold text-[#07182D] mb-6">
                1. Datos personales que podremos recabar
              </h2>

              <p className="leading-relaxed mb-6">
                Dependiendo de la interacción que la persona tenga con
                Fundación Mixhue, podremos recabar los siguientes datos
                personales:
              </p>

              <h3 className="text-xl font-semibold text-[#07182D] mb-3">
                A. Datos de contacto
              </h3>

              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>Nombre y apellidos.</li>
                <li>Correo electrónico.</li>
                <li>Número telefónico.</li>
                <li>Ciudad, municipio o localidad.</li>
                <li>
                  Información contenida en los mensajes enviados mediante
                  los formularios de contacto.
                </li>
              </ul>


              <h3 className="text-xl font-semibold text-[#07182D] mb-3">
                B. Datos relacionados con voluntariado
              </h3>

              <p className="leading-relaxed mb-4">
                Cuando una persona solicite participar como voluntaria,
                podremos solicitar información necesaria para evaluar y
                gestionar su participación, incluyendo:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>Nombre y apellidos.</li>
                <li>Correo electrónico.</li>
                <li>Número telefónico.</li>
                <li>Disponibilidad.</li>
                <li>Áreas de interés.</li>
                <li>
                  Información proporcionada voluntariamente por la persona
                  en su solicitud.
                </li>
              </ul>


              <h3 className="text-xl font-semibold text-[#07182D] mb-3">
                C. Datos relacionados con donaciones
              </h3>

              <p className="leading-relaxed mb-4">
                Cuando una persona realice o intente realizar una donación
                a través del sitio web, podrán tratarse datos necesarios
                para identificar y gestionar la operación, tales como:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Nombre.</li>
                <li>Correo electrónico.</li>
                <li>Monto de la donación.</li>
                <li>Fecha y estado de la operación.</li>
                <li>Identificadores o referencias de la transacción.</li>
              </ul>

              <p className="leading-relaxed mb-5">
                Los datos financieros o de pago que sean introducidos
                directamente en la plataforma del proveedor de servicios
                de pago serán tratados conforme a las políticas y
                condiciones de dicho proveedor.
              </p>

              <div className="bg-[#F7F6F2] border-l-4 border-[#C8A24C] rounded-r-xl p-5 mb-8">
                <p className="leading-relaxed font-medium text-[#07182D]">
                  Fundación Mixhue no solicitará ni almacenará directamente
                  contraseñas, números completos de tarjetas bancarias,
                  códigos de seguridad de tarjetas u otros datos financieros
                  que no sean necesarios para sus propias finalidades.
                </p>
              </div>


              <h3 className="text-xl font-semibold text-[#07182D] mb-3">
                D. Información proporcionada mediante solicitudes de apoyo
              </h3>

              <p className="leading-relaxed mb-4">
                En caso de que Fundación Mixhue habilite mecanismos para
                solicitar apoyo, podrá recabarse información adicional
                estrictamente necesaria para evaluar y atender la solicitud.
              </p>

              <p className="leading-relaxed">
                La naturaleza exacta de estos datos, incluyendo cualquier
                dato que pudiera considerarse sensible conforme a la
                legislación aplicable, deberá ser definida y validada
                previamente por Fundación Mixhue y su asesoría jurídica.
              </p>
            </section>


            {/* 2 */}
            <section className="mb-14">
              <h2 className="text-3xl font-semibold text-[#07182D] mb-6">
                2. Finalidades del tratamiento
              </h2>

              <p className="leading-relaxed mb-5">
                Los datos personales serán tratados para las siguientes
                finalidades primarias:
              </p>

              <ol className="list-decimal pl-6 space-y-2 mb-6">
                <li>Atender y responder solicitudes realizadas mediante los medios de contacto.</li>
                <li>Dar seguimiento a solicitudes de información.</li>
                <li>Gestionar solicitudes de voluntariado.</li>
                <li>Coordinar actividades y comunicación con personas voluntarias.</li>
                <li>Gestionar y dar seguimiento a donaciones.</li>
                <li>Emitir comprobantes o constancias cuando resulte aplicable.</li>
                <li>Atender solicitudes de apoyo de acuerdo con los programas de la Fundación.</li>
                <li>Mantener comunicación relacionada con las actividades y servicios de Fundación Mixhue.</li>
                <li>Cumplir obligaciones legales aplicables.</li>
                <li>Mantener registros administrativos, operativos y de seguridad relacionados con las actividades de la Fundación.</li>
              </ol>

              <p className="leading-relaxed">
                En caso de que Fundación Mixhue pretenda utilizar los datos
                personales para finalidades adicionales que requieran
                consentimiento, dichas finalidades serán informadas mediante
                los mecanismos correspondientes.
              </p>
            </section>


            {/* 3 */}
            <section className="mb-14">
              <h2 className="text-3xl font-semibold text-[#07182D] mb-6">
                3. Uso de datos para finalidades secundarias
              </h2>

              <p className="leading-relaxed mb-5">
                En su caso, Fundación Mixhue podrá utilizar determinados
                datos de contacto para enviar información relacionada con
                actividades, campañas, eventos, programas o noticias de
                la organización.
              </p>

              <p className="leading-relaxed mb-5">
                La persona titular podrá manifestar su negativa para que
                sus datos sean utilizados para aquellas finalidades
                secundarias que requieran consentimiento.
              </p>

              <p className="leading-relaxed mb-3">
                El mecanismo para ejercer esta negativa será:
              </p>

              <div className="bg-[#F7F6F2] rounded-xl p-5">
                <strong>
                  [CORREO O MECANISMO PARA NEGARSE A FINALIDADES SECUNDARIAS]
                </strong>
              </div>
            </section>


            {/* 4 */}
            <section className="mb-14">
              <h2 className="text-3xl font-semibold text-[#07182D] mb-6">
                4. Transferencia de datos personales
              </h2>

              <p className="leading-relaxed mb-5">
                Fundación Mixhue podrá comunicar datos personales a terceros
                únicamente cuando dicha comunicación resulte necesaria para
                las finalidades informadas, exista una base jurídica que lo
                permita o resulte aplicable alguna de las excepciones
                previstas por la legislación.
              </p>

              <p className="leading-relaxed mb-5">
                Entre los posibles terceros o proveedores que podrían
                intervenir en el tratamiento se encuentran, en su caso:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Proveedores de servicios de alojamiento y servidores.</li>
                <li>Proveedores de bases de datos.</li>
                <li>Proveedores de servicios de correo electrónico.</li>
                <li>Proveedores de servicios tecnológicos.</li>
                <li>Proveedores de servicios de pago.</li>
                <li>
                  Servicios necesarios para prevenir fraude, abuso o ataques
                  informáticos.
                </li>
                <li>Autoridades competentes cuando exista una obligación legal.</li>
              </ul>

              <p className="leading-relaxed mb-5">
                Los proveedores que actúen por cuenta de Fundación Mixhue
                deberán tratar los datos conforme a las instrucciones y
                obligaciones aplicables.
              </p>

              <p className="leading-relaxed">
                Cuando una transferencia requiera consentimiento, se
                solicitará conforme a la legislación aplicable.
              </p>
            </section>


            {/* 5 */}
            <section className="mb-14">
              <h2 className="text-3xl font-semibold text-[#07182D] mb-6">
                5. Protección de los datos personales
              </h2>

              <p className="leading-relaxed mb-5">
                Fundación Mixhue implementará medidas de seguridad
                administrativas, técnicas y físicas razonables y
                proporcionales a la naturaleza de los datos tratados,
                con el objetivo de protegerlos contra daño, pérdida,
                alteración, destrucción, acceso o tratamiento no autorizado.
              </p>

              <p className="leading-relaxed mb-5">
                Entre las medidas técnicas podrán incluirse, según corresponda:
              </p>

              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Conexiones cifradas mediante HTTPS.</li>
                <li>Control de acceso.</li>
                <li>Autenticación de usuarios autorizados.</li>
                <li>Protección de credenciales.</li>
                <li>Almacenamiento seguro de secretos y credenciales.</li>
                <li>Validación de información recibida.</li>
                <li>Protección contra accesos automatizados y abusivos.</li>
                <li>Actualización de componentes tecnológicos.</li>
                <li>Copias de seguridad y mecanismos de recuperación.</li>
                <li>Registro y monitoreo de actividades relevantes.</li>
              </ul>

              <p className="leading-relaxed">
                El acceso a los datos personales estará limitado al personal
                y proveedores que necesiten conocerlos para cumplir con las
                finalidades correspondientes.
              </p>
            </section>


            {/* 6 */}
            <section className="mb-14">
              <h2 className="text-3xl font-semibold text-[#07182D] mb-6">
                6. Conservación de los datos
              </h2>

              <p className="leading-relaxed mb-5">
                Los datos personales serán conservados únicamente durante
                el periodo necesario para cumplir con las finalidades para
                las cuales fueron recabados, así como durante los periodos
                necesarios para cumplir obligaciones legales, administrativas
                o de defensa de derechos.
              </p>

              <p className="leading-relaxed mb-5">
                Una vez cumplidas las finalidades correspondientes y
                concluido el periodo de conservación aplicable, los datos
                serán eliminados, bloqueados o sometidos al mecanismo que
                corresponda conforme a la legislación aplicable.
              </p>

              <p className="leading-relaxed">
                Los periodos específicos de conservación serán determinados
                por Fundación Mixhue con asesoría jurídica y administrativa.
              </p>
            </section>


            {/* 7 */}
            <section className="mb-14">
              <h2 className="text-3xl font-semibold text-[#07182D] mb-6">
                7. Derechos ARCO
              </h2>

              <p className="leading-relaxed mb-6">
                La persona titular de los datos personales podrá ejercer
                sus derechos de:
              </p>

              <div className="space-y-4 mb-7">
                <div className="bg-[#F7F6F2] rounded-xl p-5">
                  <strong className="text-[#07182D]">Acceso:</strong>{" "}
                  conocer qué datos personales son tratados por Fundación Mixhue.
                </div>

                <div className="bg-[#F7F6F2] rounded-xl p-5">
                  <strong className="text-[#07182D]">Rectificación:</strong>{" "}
                  solicitar la corrección de datos personales inexactos,
                  incompletos o desactualizados.
                </div>

                <div className="bg-[#F7F6F2] rounded-xl p-5">
                  <strong className="text-[#07182D]">Cancelación:</strong>{" "}
                  solicitar la eliminación de sus datos personales cuando
                  resulte procedente.
                </div>

                <div className="bg-[#F7F6F2] rounded-xl p-5">
                  <strong className="text-[#07182D]">Oposición:</strong>{" "}
                  solicitar que sus datos personales no sean utilizados para
                  determinadas finalidades cuando resulte procedente.
                </div>
              </div>

              <p className="leading-relaxed mb-5">
                Para ejercer estos derechos, la persona titular podrá
                presentar una solicitud mediante:
              </p>

              <div className="bg-[#07182D] text-white rounded-2xl p-7 space-y-3">
                <p>
                  <strong>Correo electrónico:</strong>{" "}
                  [CORREO PARA DERECHOS ARCO]
                </p>

                <p>
                  <strong>Domicilio:</strong> [DOMICILIO]
                </p>

                <p>
                  <strong>Responsable de atención:</strong>{" "}
                  [NOMBRE O CARGO DEL RESPONSABLE]
                </p>
              </div>

              <p className="leading-relaxed mt-6">
                La solicitud deberá contener la información y documentación
                necesaria para acreditar la identidad de la persona titular
                o de su representante, así como los elementos necesarios
                para atender la solicitud.
              </p>
            </section>


            {/* 8 */}
            <section className="mb-14">
              <h2 className="text-3xl font-semibold text-[#07182D] mb-6">
                8. Revocación del consentimiento
              </h2>

              <p className="leading-relaxed mb-5">
                Cuando el tratamiento de datos personales se encuentre basado
                en el consentimiento de la persona titular, ésta podrá
                solicitar su revocación mediante los mecanismos establecidos
                por Fundación Mixhue.
              </p>

              <p className="leading-relaxed mb-5">
                La revocación podrá estar sujeta a las limitaciones previstas
                por la legislación aplicable y no necesariamente tendrá
                efectos retroactivos.
              </p>

              <p className="leading-relaxed mb-3">
                Las solicitudes podrán realizarse mediante:
              </p>

              <div className="bg-[#F7F6F2] rounded-xl p-5">
                <strong>[CORREO / MECANISMO DE REVOCACIÓN]</strong>
              </div>
            </section>


            {/* 9 */}
            <section className="mb-14">
              <h2 className="text-3xl font-semibold text-[#07182D] mb-6">
                9. Cookies y tecnologías similares
              </h2>

              <p className="leading-relaxed mb-5">
                El sitio web de Fundación Mixhue podrá utilizar cookies y
                tecnologías similares necesarias para su funcionamiento,
                seguridad, configuración y, en su caso, análisis de uso.
              </p>

              <p className="leading-relaxed mb-5">
                El tipo de cookies utilizadas, sus finalidades y los
                mecanismos disponibles para su gestión deberán especificarse
                de acuerdo con las herramientas que efectivamente se
                implementen en el sitio web.
              </p>

              <div className="border border-[#C8A24C]/30 bg-[#C8A24C]/5 rounded-2xl p-6">
                <p className="text-sm leading-relaxed">
                  <strong className="text-[#07182D]">
                    Nota para revisión jurídica:
                  </strong>{" "}
                  este apartado deberá actualizarse antes de publicar el
                  sitio, una vez definidas las herramientas de analítica,
                  estadísticas, mapas, redes sociales, pasarela de pago y
                  demás servicios de terceros que efectivamente se utilicen.
                </p>
              </div>
            </section>


            {/* 10 */}
            <section className="mb-14">
              <h2 className="text-3xl font-semibold text-[#07182D] mb-6">
                10. Cambios al Aviso de Privacidad
              </h2>

              <p className="leading-relaxed mb-5">
                Fundación Mixhue podrá modificar o actualizar el presente
                Aviso de Privacidad para reflejar cambios en sus actividades,
                servicios, mecanismos de tratamiento, obligaciones legales
                o tecnologías utilizadas.
              </p>

              <p className="leading-relaxed mb-3">
                Las modificaciones serán comunicadas mediante el sitio web
                oficial:
              </p>

              <div className="bg-[#F7F6F2] rounded-xl p-5 mb-5">
                <strong>[DOMINIO OFICIAL]</strong>
              </div>

              <p className="leading-relaxed">
                La fecha de última actualización aparecerá al inicio del
                presente documento.
              </p>
            </section>


            {/* 11 */}
            <section className="mb-14">
              <h2 className="text-3xl font-semibold text-[#07182D] mb-6">
                11. Contacto
              </h2>

              <p className="leading-relaxed mb-6">
                Para cualquier duda relacionada con el tratamiento y
                protección de datos personales, la persona titular podrá
                comunicarse mediante:
              </p>

              <div className="bg-[#07182D] text-white rounded-2xl p-8 space-y-4">
                <p className="text-xl font-semibold">
                  Fundación Mixhue A.C.
                </p>

                <p className="text-white/70">
                  <strong>Correo:</strong> [CORREO OFICIAL]
                </p>

                <p className="text-white/70">
                  <strong>Teléfono:</strong> [TELÉFONO]
                </p>

                <p className="text-white/70">
                  <strong>Domicilio:</strong> [DOMICILIO COMPLETO]
                </p>

                <p className="text-white/70">
                  <strong>Fecha de última actualización:</strong> [FECHA]
                </p>
              </div>
            </section>


            {/* NOTA FINAL PARA EL ABOGADO */}
            <section className="border-t border-gray-200 pt-10">
              <div className="bg-[#E8DCC8] rounded-2xl p-7">
                <p className="font-semibold text-[#07182D] mb-3">
                  Importante para revisión jurídica
                </p>

                <p className="text-sm leading-relaxed text-[#5C5044]">
                  El presente documento constituye un borrador de trabajo
                  preparado para su revisión y validación jurídica. Su
                  publicación definitiva deberá realizarse después de
                  confirmar la identidad legal del responsable, los datos
                  efectivamente recabados, las finalidades, las transferencias,
                  los proveedores tecnológicos utilizados, los mecanismos
                  para ejercer derechos y cualquier tratamiento de datos
                  personales sensibles.
                </p>
              </div>
            </section>

          </div>

        </article>
      </section>

    </main>
  );
}