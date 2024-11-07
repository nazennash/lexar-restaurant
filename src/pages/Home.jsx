import { Dishes } from "../components/Dishes/Dishes";
import { Header } from "../components/Header/Header";
import { Welcome } from "../components/Welcome/Welcome";

export const Home = () => {
  return (
    <div className="container mx-auto px-8">
      <Header />
      <Dishes />
      <Welcome />
    </div>
  );
};
