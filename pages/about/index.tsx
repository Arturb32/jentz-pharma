import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-400 p-4"
    >
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-3xl w-full">
        <div className="flex items-center justify-center p-8">
          <Image
            src={logo.src}
            alt="Jentz Pharma logo"
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>
        <h1 className="text-4xl text-center font-bold text-blue-900 mb-8">
          Welcome to Jentz Pharma
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-blue-900 p-8">
          <div className="text-justify">
            <p className="text-sm mb-4">
              A leading pharmaceutical industry committed to improving and
              transforming lives globally. With decades of expertise in
              research, development, and manufacturing, we strive to provide
              innovative and high-quality solutions to meet the healthcare needs
              of millions.
            </p>
            <p className="text-sm mb-4">
              At Jentz Pharma, our primary focus is on enhancing the well-being
              of individuals, families, and communities. We believe in the power
              of medicine to heal, restore, and empower people to live their
              lives to the fullest potential. Our team of dedicated scientists,
              engineers, and healthcare professionals work tirelessly to create
              and deliver safe, effective, and affordable medications that
              address a wide range of medical conditions.
            </p>
            <p className="text-sm mb-4">
              In line with our core values of integrity, excellence, and
              compassion, we are committed to upholding the highest standards of
              ethics and social responsibility. We aim to make healthcare
              accessible to all, irrespective of their background or
              circumstances. We partner with healthcare providers,
              organizations, and governments to ensure that our medicines reach
              those who need it the most.
            </p>
          </div>
          <div className="text-justify">
            <p className="text-sm mb-4">
              Continuous innovation is at the heart of Jentz Pharma. We heavily
              invest in research and development to discover breakthrough
              treatments that can revolutionize healthcare outcomes. By
              collaborating with leading academic institutions and industry
              experts, we remain at the forefront of pharmaceutical
              advancements, fueling medical progress and driving positive change
              in the world.
            </p>
            <p className="text-sm mb-4">
              Our state-of-the-art manufacturing facilities adhere to the
              strictest quality control measures to ensure that every product
              leaving our premises is safe, reliable, and of the highest
              standard. We understand the trust that patients and healthcare
              professionals place in our medicines, and we are dedicated to
              maintaining that trust through our commitment to excellence.
            </p>
            <p className="text-sm mb-4">
              Join us in our mission to enhance lives, one pill at a time.
              Together, let us build a healthier and brighter future, where
              everyone has access to the quality healthcare they deserve. Jentz
              Pharma – caring for humanity's well-being.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
