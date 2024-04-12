import Carousel from "../../components/Carousel";
import logo from "../../assets/logo.png";

const dataImg = [{ image: logo.src }, { image: logo.src }, { image: logo.src }];

const Home = () => {
  return (
    <div className="w-full bg-gradient-to-b from-blue-200 to-blue-400 h-[calc(100vh-48px)] flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to Jentz Pharma
        </h1>
        <p className="text-lg text-white mb-8">
          Leading the way in pharmaceutical innovation
        </p>
      </div>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Brands
        </h2>
        <Carousel data={dataImg} />
      </div>
      <footer className="mt-8 text-gray-600 text-center">
        <p>
          &copy; {new Date().getFullYear()} Jentz Pharma. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
