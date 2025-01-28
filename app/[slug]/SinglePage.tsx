import ProductImage from "../components/ProductImage"
import Customize from "../components/Customize"
import Add from "../components/Add"

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* img */}
      <div className="w-full lg:w-1/2 lg:stick top-20 h-max">
       <ProductImage />
      </div>
      {/* text */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
      <h1 className="text-3xl font-medium">
        Product Name
      </h1>
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur
         adipisicing elit. Aliquam aspernatur quam ab
          dolore harum deleniti ipsa autem magnam corrupti,fuga iure consequatur iusto numquam 
        recusandae dignissimos. Dolorum molestiae aspernatur adipisci?
      </p>
      <div className="h-[2px] bg-gray-200"/>
      <div className="flex items-center gap-4">
        <h3 className="text-xl text-gray-500 line-through">$59</h3>
        <h3 className="font-medium text-2xl">$49</h3>
      </div>
      <div className="h-[2px] bg-gray-200"/>
      <Customize />
      <Add/>
      </div>
      </div>
  )
}

export default SinglePage;