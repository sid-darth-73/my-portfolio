import react from '/icon_react.png'
import tailwind from '/tailwindcss.png'
import imghero from '/imghero.png'
import cf from '/cf.png'
import nextjs from '/Nextjs.png'
import postgres from '/PostgresSQL.png'

const skillData = [
  { id: 1, image: nextjs },
  { id: 2, image: cf },
  { id: 3, image: react },
  { id: 4, image: postgres },
]

export default function Skills() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10">
      <div className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2"></div>

      <img
        src={imghero}
        alt="Left decoration"
        className="absolute z-10 left-2 top-2 sm:left-16 sm:top-32 transform -rotate-12 w-24 h-auto sm:w-32 opacity-70"
      />

      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative z-20 text-center space-y-6 sm:space-y-10"
      >
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold">
            My knowledge <br /> and <span className="text-purple-400">Skills</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Tenetur debitis consectetur accusantium quos, sint quis?
          </p>
        </header>

        {/* Icons Grid */}
        <section
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 mt-6 place-items-center"
        >
          {skillData.map((skill) => (
            <img
              key={skill.id}
              src={skill.image}
              alt=""
              className="w-16 h-16 sm:w-20 sm:h-20 hover:scale-110 transition-transform duration-300"
            />
          ))}
        </section>
      </div>

      <img
        src={imghero}
        alt="Right decoration"
        className="absolute z-10 right-2 top-2 sm:right-16 sm:top-32 transform rotate-12 w-24 h-auto sm:w-32 opacity-70"
      />
    </section>
  );
}
