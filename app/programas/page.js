export default function Programas() {
  const programas = [
    {
      numero: "01",
      titulo: "Alimentación",
      descripcion:
        "Apoyamos a familias y personas que enfrentan dificultades para acceder a una alimentación adecuada, contribuyendo a cubrir necesidades básicas.",
      color: "bg-[#E8DCC8]",
      texto: "text-[#4A3828]",
      detalle: "text-[#6B5744]",
    },
    {
      numero: "02",
      titulo: "Educación",
      descripcion:
        "Impulsamos el acceso a herramientas y oportunidades educativas que permitan fortalecer el desarrollo personal y comunitario.",
      color: "bg-[#DCE7E2]",
      texto: "text-[#24443B]",
      detalle: "text-[#527269]",
    },
    {
      numero: "03",
      titulo: "Apoyo y asistencia",
      descripcion:
        "Brindamos acompañamiento y apoyo a personas en situación de vulnerabilidad, incluyendo personas con discapacidad y sus familias.",
      color: "bg-[#E4DCE8]",
      texto: "text-[#403249]",
      detalle: "text-[#695773]",
    },
    {
      numero: "04",
      titulo: "Orientación para el empleo",
      descripcion:
        "Ofrecemos orientación y acompañamiento para ayudar a las personas a identificar oportunidades de empleo y fortalecer sus capacidades.",
      color: "bg-[#DCE5EF]",
      texto: "text-[#263B52]",
      detalle: "text-[#526A82]",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F6F2]">

      {/* HERO */}
      <section className="bg-[#07182D] text-white py-32">
        <div className="max-w-7xl mx-auto px-8">

          <p className="text-[#C8A24C] uppercase tracking-[0.35em] text-sm font-semibold mb-6">
            Nuestra labor
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold leading-tight max-w-4xl">
            Programas que
            <br />
            <span className="text-[#C8A24C]">
              generan oportunidades.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-white/65 text-lg md:text-xl leading-relaxed">
            Cada una de nuestras acciones busca responder a necesidades
            reales y acompañar a las personas en la construcción de
            mejores oportunidades.
          </p>

        </div>
      </section>


      {/* PROGRAMAS */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-8">

          <div className="grid md:grid-cols-2 gap-8">

            {programas.map((programa) => (
              <article
                key={programa.numero}
                className={`${programa.color} ${programa.texto} min-h-[420px] rounded-[2rem] p-10 md:p-12 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-2xl`}
              >

                <div>
                  <span className="text-sm font-semibold opacity-50 tracking-widest">
                    {programa.numero}
                  </span>
                </div>

                <div>

                  <h2 className="text-4xl md:text-5xl font-semibold">
                    {programa.titulo}
                  </h2>

                  <p
                    className={`${programa.detalle} mt-6 text-lg leading-relaxed max-w-xl`}
                  >
                    {programa.descripcion}
                  </p>

                  
                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="bg-[#07182D] text-white py-24">

        <div className="max-w-4xl mx-auto px-8 text-center">

          <p className="text-[#C8A24C] uppercase tracking-[0.3em] text-sm font-semibold mb-5">
            Tú también puedes participar
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold">
            Una pequeña acción puede
            <span className="text-[#C8A24C]">
              {" "}generar un gran cambio.
            </span>
          </h2>

          <p className="text-white/60 text-lg mt-6">
            Puedes apoyar nuestros programas mediante una donación
            o formando parte de nuestro equipo de voluntariado.
          </p>

          <div className="flex justify-center gap-4 flex-wrap mt-10">

            <a
              href="/donar"
              className="bg-[#C8A24C] text-[#07182D] px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:bg-[#D8B866] transition-all duration-300"
            >
              Quiero donar
            </a>

            <a
              href="/voluntariado"
              className="border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Ser voluntario
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}