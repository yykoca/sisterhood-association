import Link from 'next/link';
import NavLinks from './nav-links';
import Image from 'next/image';

export default function SideNav() {
  return (
    <div className="absolute w-full bg-white bg-opacity-80 z-10">
      <div className="flex flex-row xl:container mx-auto p-4">
        <Link className="flex items-center justify-start rounded-md" href="/">
          <div className="w-100 md:w-40 flex items-center justify-center">
            <Image
              className="xl:ms-1 ms-6"
              src="/images/adz-logo-blue.png"
              alt="Logo"
              width={100}
              height={100}
              priority
            />
          </div>
        </Link>
        <div className="flex grow flex-row justify-between items-center space-x-2 md:flex-row md:space-x-0 md:space-y-2">
          <div className="hidden h-auto w-full grow rounded-md md:block"></div>
          <NavLinks />
        </div>
      </div>
    </div>
  );
}
