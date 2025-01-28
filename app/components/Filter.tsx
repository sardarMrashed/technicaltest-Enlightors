const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select 
        name="type" 
        id=""
         className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200">
          <option>Type</option>
          <option value="Physical">Physical</option>
          <option value="Digital">Digital</option>
        </select>
        <input type="text" name="min"  placeholder="min Price."/>
         type="text"
          placeholder="min Price."
           className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200" />
        <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200">
          <option value="all">Type</option>
          <option value="Physical">Physical</option>
          <option value="Digital">Digital</option>
        </select>
        <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200">
          <option value="all">Type</option>
          <option value="Physical">Physical</option>
          <option value="Digital">Digital</option>
        </select>
        <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200">
          <option value="all">Type</option>
          <option value="Physical">Physical</option>
          <option value="Digital">Digital</option>
        </select>
        </div>
      </div>
  )
}

export default Filter
