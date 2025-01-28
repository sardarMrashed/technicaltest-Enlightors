import Image from 'next/image'
import Link from 'next/link'
const CategoryList = () => {
  return (
    <div className='px-4 overflow-x-scroll scrollbar-hide'>
      <div className="flex gap-4 md:gap-8">
        <Link href='/list?cat=test'>
        <div className='relative bg-slate-100 w-full h-98'>
       <Image src='' 
       alt='food' 
       sizes='20vw'
       fill
       className='object-cover' />
          <p className='text-center'>Food</p>
        </div>
        </Link>


      </div>
    </div>
  )
}

export default CategoryList
