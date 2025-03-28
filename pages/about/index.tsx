import Image from "next/image";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white pt-16"
    >
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Sobre a Jentz Pharma
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Transformando vidas através da inovação farmacêutica
            </p>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-center justify-center p-8 border-b border-gray-200">
              <Image
                src={logo.src}
                alt="Jentz Pharma logo"
                width={180}
                height={180}
                className="rounded-lg"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Uma indústria farmacêutica líder comprometida em melhorar e
                  transformar vidas globalmente. Com décadas de expertise em
                  pesquisa, desenvolvimento e fabricação, nos esforçamos para
                  fornecer soluções inovadoras e de alta qualidade para atender
                  às necessidades de saúde de milhões de pessoas.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Na Jentz Pharma, nosso foco principal é melhorar o bem-estar
                  de indivíduos, famílias e comunidades. Acreditamos no poder da
                  medicina para curar, restaurar e capacitar as pessoas a
                  viverem suas vidas ao máximo potencial.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Em linha com nossos valores fundamentais de integridade,
                  excelência e compaixão, nos comprometemos a manter os mais
                  altos padrões de ética e responsabilidade social.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  A inovação contínua está no coração da Jentz Pharma.
                  Investimos fortemente em pesquisa e desenvolvimento para
                  descobrir tratamentos revolucionários que podem transformar os
                  resultados em saúde.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Nossas instalações de fabricação de última geração seguem as
                  mais rigorosas medidas de controle de qualidade para garantir
                  que cada produto que sai de nossas instalações seja seguro,
                  confiável e do mais alto padrão.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Junte-se a nós em nossa missão de melhorar vidas, um
                  comprimido por vez. Juntos, vamos construir um futuro mais
                  saudável e brilhante, onde todos tenham acesso à saúde de
                  qualidade que merecem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Jentz Pharma. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default About;
