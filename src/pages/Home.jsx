import Hero from "../components/Hero";
import GetToKnowMe from '../components/GetToKnowMe';
import SelectedWork from "../components/SelectedWork";

const Home = () => {
  return (
    <div className=" text-gray-800 dark:text-white">
      <Hero />
      <SelectedWork />
      <GetToKnowMe />
    </div>
  );
};

export default Home;