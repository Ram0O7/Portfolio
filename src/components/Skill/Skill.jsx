import skills from "../../utils/skills";

const Skill = () => {
  return (
    <div className="skill_container w-full overflow-hidden mt-8 py-12">
      <div className="skill_slide grid grid-flow-col">
        {skills.map((skill) => {
          const { language, experience, icon } = skill;
          return (
            <div
              className="skill flex flex-col items-center justify-center gap-4 sm:gap-6 text-center w-44 sm:w-52 px-4"
              key={Date.now() * Math.random()}
            >
              <div className="w-20 h-20 object-contain">{icon}</div>
              <h1 className="text-3xl sm:text-4xl font-bold">{language}</h1>
              <p className="text-xs sm:text-sm font-bold">{experience}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
