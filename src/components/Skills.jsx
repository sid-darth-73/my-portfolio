import react from '/react.svg';
import tailwind from '/tailwindcss.png';
import imghero from '/imghero.png';
import cf from '/cf.svg';
import Nextjs from '/Nextjs.png';
import postgres from '/PostgresSQL.png';
import leetcode from '/leetcode.svg';
import mongo from '/mongo.svg';
import js from '/js.svg';
import cplusplus from '/cplusplus.svg';
import git from '/git.svg';
import api from '/api.svg';
import node from '/node.svg';
import sql from '/sql.svg';

const skillData = [
  { id: 1, image: Nextjs, name: "Next.js" },
  { id: 2, image: react, name: "React" },
  { id: 4, image: postgres, name: "PostgreSQL" },
  { id: 6, image: tailwind, name: "Tailwind CSS" },
  { id: 7, image: js, name: "Javascript" },
  { id: 8, image: mongo, name: "MongoDB" },
  { id: 9, image: cplusplus, name: "C++" },
  { id: 10, image: git, name: "Git" },
  { id: 11, image: api, name: "Backend Dev" },
  { id: 12, image: node, name: "Nodejs" },
  { id: 13, image: sql, name: "SQL" },
];

const SkillCard = ({ image, name }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-800 bg-opacity-70 rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 group">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 rounded-full border-2 border-purple-500 group-hover:border-purple-300 transition-colors duration-300"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/64x64/cccccc/000000?text=N/A";
        }}
      />
      <p className="text-sm sm:text-base font-semibold text-white group-hover:text-purple-300 transition-colors duration-300 text-center">
        {name}
      </p>
    </div>
  );
};

export default function Skills() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10 bg-gradient-to-br from-gray-900 to-black font-inter">
      {/* Background Blurs */}
      <div className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2"></div>
      <div className="absolute z-0 w-64 h-32 sm:w-80 sm:h-40 bg-blue-500 rounded-full blur-3xl opacity-30 bottom-10 sm:bottom-20 right-1/2 transform translate-x-1/2"></div>

      {/* Left Decoration */}
      <img
        src={imghero}
        alt="Left decoration"
        className="absolute z-10 left-2 top-2 sm:left-16 sm:top-32 transform -rotate-12 w-24 h-auto sm:w-32 opacity-70"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/100x100/8b5cf6/ffffff?text=Deco";
        }}
      />

      {/* Content */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative z-20 text-center space-y-6 sm:space-y-10 max-w-6xl mx-auto"
      >
        <header>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            My knowledge <br /> and <span className="text-purple-400">Skills</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base px-2">
            Here's a glimpse into the technologies and platforms I've gained experience in
          </p>
        </header>

        <section
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex overflow-x-auto scroll-smooth space-x-4 mt-6 px-4 py-6 bg-gray-800 bg-opacity-50 rounded-2xl shadow-xl border border-gray-700 scrollbar-hide"
        >
          {skillData.map((skill) => (
            <div
              key={skill.id}
              className="flex-shrink-0 w-[80%] sm:w-[45%] md:w-[30%] lg:w-[20%] xl:w-[16%]"
            >
              <SkillCard image={skill.image} name={skill.name} />
            </div>
          ))}
        </section>
      </div>

      <img
        src={imghero}
        alt="Right decoration"
        className="absolute z-10 right-2 top-2 sm:right-16 sm:top-32 transform rotate-12 w-24 h-auto sm:w-32 opacity-70"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/100x100/8b5cf6/ffffff?text=Deco";
        }}
      />
    </section>
  );
}
