import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  const sections = [
    {
      header: 'Visit Website',
      image: '/images/hydrangea-5076212_1920.jpg',
    },
    {
      header: 'Visit Website',
      image: '/images/mother-and-daughter-3281388_1920.jpg',
    },
    {
      header: 'Visit Website',
      image: '/images/people-2567915_1920.jpg',
    },
  ];

  return (
    <>
      <section
        className="xl:container mx-auto flex flex-col justify-center"
        style={{ minHeight: '100vh' }}
      >
        <div className="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12 bg-white">
          {sections.map((section) => (
            <>
              <article className="p-6 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
                <Link
                  href="/"
                  className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
                />
                <div className="relative mb-4 rounded-2xl">
                  <Image
                    width={400}
                    height={400}
                    className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                    src={section.image}
                    alt=""
                  />
                  <Link
                    className="flex justify-center items-center bg-blue-400 bg-opacity-80  absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                    href="/about"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {section.header}
                  </Link>
                </div>
                <h3 className="font-medium text-xl leading-8">
                  <Link
                    href="https://animeflyx.vercel.app/"
                    className="block relative group-hover:text-purple-500 transition-colors duration-200"
                  >
                    {/* <span dangerouslySetInnerHTML={{ __html: x.comment }} /> */}
                  </Link>
                </h3>
              </article>
            </>
          ))}
        </div>
      </section>
    </>
  );
}
