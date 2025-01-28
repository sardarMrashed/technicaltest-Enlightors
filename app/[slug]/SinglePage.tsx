import ProductImage from "../components/ProductImage"
const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* img */}
      <div className="w-full lg:w-1/2 lg:stick top-20 h-max">
       <ProductImage />
      </div>
      {/* text */}
      <div className="w-full lg:w-1/2"></div>
    </div>
  )
}

export default SinglePage