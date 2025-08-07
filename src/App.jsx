import "./App.css";
import ProductImage from "./components/Atoms/main/BestProduct/ProductImage";
import CategoryTabs from "./components/Molecules/main/BestProduct/CategoryTabs";
import BestProductSection from "./components/Organisms/main/BestProduct/BestProductSection";
import ProductList from "./components/Organisms/main/BestProduct/ProductList";
import HomepageTemplate from "./components/Templates/main/BestProduct/HomepageTemplate";
import MainHero from "./components/Templates/main/MainHero";
import ProductsTemplate from "./components/Templates/main/ProductsTemplate";

function App() {
  return (
    <>
      <MainHero />
      <ProductsTemplate />
      <HomepageTemplate />
    </>
  );
}

export default App;
