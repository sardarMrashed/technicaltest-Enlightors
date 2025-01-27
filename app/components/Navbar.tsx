import Link from 'next/link';
import Menu from '../components/Menu';
import Image from 'next/image';
import SearchBar from './SearchBar';
import NavIcons from './NavIcons';

// Search bar


const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">  
    {/* Mobile screen */}
<div className="h-full flex justify-between items-center md:hidden">
    
      <Link href="/" >
      <div className="text-2xl tracking-wide">Enlightors</div>
        </Link>
      <Menu />
      </div>
      
      {/* Desktop screen */}
        <div className="hidden md:flex justify-between gap-8 items-center h-full">
            {/* LIFT SCREEN */}
            <div className='w-1/3'>
                <Link href="/" className='flex items-center gap-3'>
                <Image src="/logo.png" alt="Enlightors logo" width={24} height={24} />
                <div className="text-2xl tracking-wide">Enlightors</div>
                </Link>
            </div>
            {/* Right of the screen */}
            <div className='w-2/3 flex justify-between items-center gap-8'>
            <SearchBar />
            <NavIcons />
            </div>
     
        </div>
    </div>
  );
}

export default Navbar;
