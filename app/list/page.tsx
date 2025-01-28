import Image from 'next/image'


const ListPage = () => {
  return (
    <div className="px-4 Md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
   <div className="1">
    <div className="w-2/3"></div>
      <div className="relative w-1/3">
    <Image src="woman.png" alt="" 
    fill 
    className='object-contain'
     />
     
    </div>
   </div>
!
    </div>
  )
}

export default  ListPage;