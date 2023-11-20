import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div
        className="flex flex-grow w-full mx-auto md:overflow-y-auto bg-red-200"
        style={{ height: '100vh' }}
      >
        <Image
          src="/images/people-2567915_1920.jpg"
          alt="Logo"
          fill={true}
          objectFit="cover"
          objectPosition="center 20%"
          priority
        />
      </div>

      <section className="md:grid xl:container mx-auto md:gap-6 md:grid-cols-2 p-6">
        <article className="flex flex-col justify-center p-12 my-12">
          <h2 className="mb-6">WHO WE ARE</h2>
          <h4 className="mb-3">
            ADZ: STRATEGIC PARTNER FOR WOMEN’S ECONOMIC EMPOWERMENT.
          </h4>
          <p className="py-2 mb-4">
            EWA is an organization dedicated to advancing the economic
            empowerment of women. Its mission is to create an inclusive and
            supportive ecosystem that promotes gender equality, fosters women’s
            entrepreneurship initiatives, and advocates for development
            approaches that enable women to thrive in various economic sectors.
          </p>
          <h4>WHY ADZ?</h4>
          <p>
            EWA acts as a bridge between various stakeholders in the ecosystem,
            including government bodies, corporations, accelerators, women
            entrepreneurs, and investors. It facilitates partnerships and
            collaborations that benefit women in business.
          </p>
        </article>
        <article className="flex flex-col justify-center p-12">
          <Image
            width={400}
            height={400}
            className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
            src="/images/hydrangea-5076212_1920.jpg"
            alt=""
          />
        </article>

        <article className="flex flex-col justify-center p-12">
          <Image
            width={400}
            height={400}
            className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
            src="/images/mother-and-daughter-3281388_1920.jpg"
            alt=""
          />
        </article>
        <article className="flex flex-col justify-center p-12">
          <h2 className="mb-6">WHO WE ARE</h2>
          <h4 className="mb-3">
            ADZ: STRATEGIC PARTNER FOR WOMEN’S ECONOMIC EMPOWERMENT.
          </h4>
          <p className="py-2 mb-4">
            EWA is an organization dedicated to advancing the economic
            empowerment of women. Its mission is to create an inclusive and
            supportive ecosystem that promotes gender equality, fosters women’s
            entrepreneurship initiatives, and advocates for development
            approaches that enable women to thrive in various economic sectors.
          </p>
          <h4>WHY ADZ?</h4>
          <p>
            EWA acts as a bridge between various stakeholders in the ecosystem,
            including government bodies, corporations, accelerators, women
            entrepreneurs, and investors. It facilitates partnerships and
            collaborations that benefit women in business.
          </p>
        </article>

        <article className="flex flex-col justify-center p-12">
          <h2 className="mb-6">WHO WE ARE</h2>
          <h4 className="mb-3">
            ADZ: STRATEGIC PARTNER FOR WOMEN’S ECONOMIC EMPOWERMENT.
          </h4>
          <p className="py-2 mb-4">
            EWA is an organization dedicated to advancing the economic
            empowerment of women. Its mission is to create an inclusive and
            supportive ecosystem that promotes gender equality, fosters women’s
            entrepreneurship initiatives, and advocates for development
            approaches that enable women to thrive in various economic sectors.
          </p>
          <h4>WHY ADZ?</h4>
          <p>
            EWA acts as a bridge between various stakeholders in the ecosystem,
            including government bodies, corporations, accelerators, women
            entrepreneurs, and investors. It facilitates partnerships and
            collaborations that benefit women in business.
          </p>
        </article>
        <article className="flex flex-col justify-center p-12">
          <Image
            width={400}
            height={400}
            className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
            src="/images/people-2567915_1920.jpg"
            alt=""
          />
        </article>
      </section>
    </>
  );
}
