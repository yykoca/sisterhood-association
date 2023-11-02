import Link from 'next/link';
import NavLinks from './nav-links';
import Image from 'next/image';

export default function SideNav() {
  return (
    <div className="flex h-full flex-row px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex items-end justify-start rounded-md p-4"
        href="/"
      >
        <div className="w-32 md:w-40">
          LOGO
          {/* <Image
              src="/logo.png"
              alt="Logo"
              width={48}
              height={16}
              priority
            /> */}
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-row md:space-x-0 md:space-y-2">
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
        <NavLinks />
      </div>
    </div>
  );
}
