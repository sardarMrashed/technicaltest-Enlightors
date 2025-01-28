import Image from 'next/image'
import Link from 'next/link'
const CategoryList = () => {
  return (
    <div className='px-4 overflow-x-scroll scrollbar-hide'>
      <div className="flex gap-4 md:gap-8">
        <Link href='/list?cat=test'>
        <div className='relative bg-slate-100 w-full h-98'>
       <Image src='https://cdn.pixabay.com/photo/2016/11/22/22/39/golf-1850984_1280.jpg' 
       alt='food' 
       sizes='20vw'
       fill
       className='object-cover' />
          <p className='text-center'>Food</p>
        </div>
        <h1 className='mt-8 font-light text-cl tracking-wide'>Categories Name</h1>
        </Link>


      </div>
    </div>
  )
}

export default CategoryList
