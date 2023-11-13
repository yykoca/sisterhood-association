'use client';

import Link from 'next/link';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Events', href: '/events' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact', },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className='flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 font-medium text-blue-950 hover:text-blue-400 md:flex-none md:justify-start md:p-2 md:px-3'>
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
