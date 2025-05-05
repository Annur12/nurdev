import Card from "./Card";

const Projects = () => {
  return (
    <section id="projects" className="pt-40 pb-20">
      <h1 className="text-xl md:text-2xl lg:text-[28px]">
        Things I&apos;ve built
      </h1>
      <p className="mt-6 text-gray-400 text-[16px] max-w-xl">
        These projects reflect my journey as a developer and what I&apos;ve
        learned along the way.
      </p>

      <div>
        <Card />
      </div>
    </section>
  );
};

export default Projects;
