
import ProductList from "./components/ProductList";
import Slider from "./components/Slider";


export default function Home() {
  return (
    <div>
      <Slider />
      <div className="mt-25">
      <ProductList />
      </div>

    </div>
  );
}
