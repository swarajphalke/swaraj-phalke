export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "Java"],
     },
    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "jQuery",
        "TailwindCSS",
        "Bootstrap",
        // "Sass",
        "React",
        "Material UI",
        "Redux",
        "Node.js",
        "Express.js",
        
        
        // "Next.js",
      ],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js"],
    },
    {
      title: "Databases",
      skills: ["MongoDB","MySQL"],
    },
    {
      title: "Hosting",
      skills: ["Vercel"],
    },
  ];

  return (
    <div className="mt-8">
      {/* <h2 className="text-2xl font-bold mb-6">Skills</h2> */}
      {skillCategories.map((category, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-lg font-semibold uppercas">{category.title}</h3>
          <p className=" leading-relaxed text-gray-500">
            — &nbsp;{category.skills.join(", ")}
          </p>
        </div>
      ))}
    </div>
  );
}
