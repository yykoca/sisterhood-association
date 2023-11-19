export default function Page() {
  const sections = [
    {
      title: "Our Mission",
      items: [
        {
          header: "Gender Equity & Economic Security",
          text: "We’ve led the fight for fair pay and economic opportunity for women — and the battle continues: Women still get just 83 cents for every dollar paid to a man, and men continue to dominate the top roles and highest-paying professions."
        }
      ]
    },
    {
      title: "Our Values",
      items: [
        {
          header: "Intersectional. Inclusive. Intergenerational. Empowering.",
          text: "Though we are nonpartisan, we are not values-neutral: We fight to remove the barriers and biases that stand in the way of gender equity. We train women to negotiate for pay and benefits and to pursue leadership roles. And we advocate for federal, state and local laws and policies to ensure equity and end discrimination."
        }
      ]
    },
    {
      title: "Our Focus",
      items: [
        {
          header: "Economic Security",
          text: "We’ve been working to narrow the gender pay gap, which greets women as soon as they enter the workforce and widens throughout their working lives. Unequal wages stand in the way of a woman’s ability to pay off student debt, build wealth and save for a secure retirement."
        },
        {
          header: "Education",
          text: "We champion equal opportunities in education. Though more than 60% of college graduates are women, they face barriers and biases throughout their schooling. From pre-school to graduate school, girls and women are unconsciously steered into certain fields of studies and away more lucrative ones, such as in STEM."
        },
        {
          header: "Advocacy",
          text: "Our members, supporters and staff work on local, state and federal levels to support laws and policies that enable women’s success. Our work in statehouses and the U.S. Capitol has helped pass hundreds of pieces of legislation. Our Legal Advocacy team has supported plaintiffs in more than 125 gender equity legal cases."
        },
      ],
      
    },
  ];

  return (
    <>
      {/* https://www.aauw.org/about */}
      <section className="xl:container mx-auto flex flex-col justify-center p-6">

        {/* <h1>About Page</h1> */}
        
        {
          sections.map(section => (
            <>
              <article className="flex flex-col justify-center p-6" style={{ 'minHeight': '100vh' }}>
                <span>{section.title}</span>

                <div className="flex">
                  {section.items.map(item => (
                    <>
                        <div className="group flex-1 p-6 bg-gray-50 hover:bg-blue-50 m-3">
                          <h3 className="mb-3 p-3 group-hover:text-red-800">{item.header}</h3>
                          <p className="px-3">{item.text}</p>
                        </div>
                    </>
                  ))}
                </div>
              </article>
            </>
            )
          )
        }
      </section>
    </>
  );
}
