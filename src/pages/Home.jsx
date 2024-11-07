import { Customer } from "../components/Customers/Customer";
import { Dishes } from "../components/Dishes/Dishes";
import { Experts } from "../components/Experts/Experts";
import { Header } from "../components/Header/Header";
import { Promo } from "../components/Promo/Promo";
import { Welcome } from "../components/Welcome/Welcome";

export const Home = () => {
  return (
    <div className="container mx-auto px-8">
      <Header />
      <Dishes />
      <Welcome />
      <Experts />
      <Customer />
      <Promo />
      <br />
      <br />
      <div className="mt-30"></div>
    </div>
  );
};
