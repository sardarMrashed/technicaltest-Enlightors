import ProductList from "./components/ProductList";
import Slider from "./components/Slider";
import CategoryList from "./components/CategoryList";
export default function Home() {
  return (
    <div>
      <Slider />
      <div className="mt-25 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl font-semibold tracking-wide">Featured Products</h1>
      <ProductList />
      </div>
      <div className="mt-24">
      <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1>
  <CategoryList />
      </div>
    {/* `  <div className="mt-25 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl font-semibold tracking-wide">New Arrivals</h1>

      </div>` */}


    </div>
  );
}
