const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select 
        name="type" 
        id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
          <option>Type</option>
          <option value="Physical">Physical</option>
          <option value="Digital">Digital</option>
        </select>
        <input 
        type="text" 
        name="min" 
         placeholder="min Price" 
         className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"/>
           <input 
        type="text" 
        name="max" 
         placeholder="max Price" 
         className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"/>
        <select name="cat"  
         className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]">
          <option >Category</option>
          <option value="">New Arrival</option>
          <option value="">Popular</option>
        </select>
        <select
          name=""
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>All Filters</option>
        </select>
    
      <div className="">
        <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
        >
          <option>Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select> 
        </div>
        </div>
      </div>
  )
}

export default Filter
