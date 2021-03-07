import { Project } from "types/project";
import { Profile } from "types/profile";
import { ProfileRow } from "components/ProfileRow";
import { ProjectCard } from "components/ProjectCard";
import { GetStaticProps } from "next";
import { getJson, getText } from "lib/getJson";
import { FC, useState } from "react";

const ProjectsSection = ({ projects }: { projects: Project[] }) => {
  const [query, setQuery] = useState("");
  const projectsFiltered = projects.filter(it => it.title.includes(query) || it.description.includes(query));
  const anythingFound = projectsFiltered.length > 0;

  return (
    <section className="flex-col p-4 gap-6 bg-gray-200 items-center">
      <div className="grid grid-cols-3 w-full">
        <div/>
        <span className="text-2xl font-medium justify-self-center">Hall of My Projects</span>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search projects..."
          className={`
            ${anythingFound ? "border-gray-400" : "border-red-600"} 
            border bg-transparent rounded p-1 justify-self-end
          `}
        />
      </div>
      {anythingFound
        ? <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            {projectsFiltered.map(it => <ProjectCard key={it.title} project={it}/>)}
          </div>
        : <span className="py-8">Nothing was found</span>
      }

    </section>
  );
};

const TopSection = ({ about, profiles }: { about: string, profiles: Profile[] }) =>
  <section className="bg-white p-4 flex-col gap-4 layout-shadow z-10">
    <span className="text-4xl font-medium">overlisted</span>
    <div className="gap-10">
      {about}
      <div className="gap-2 flex-col min-w-max items-start">
        {profiles.map(it => <ProfileRow key={it.url ?? `${it.user}@${it.service}`} profile={it}/>)}
      </div>
    </div>
  </section>;

const Home: FC<{ about: string, profiles: Profile[], projects: Project[] }> = ({ about, profiles, projects }) =>
  <div className="flex-col max-w-6xl shadow-xl mb-auto">
    <TopSection about={about} profiles={profiles}/>
    <ProjectsSection projects={projects}/>
  </div>;

export const getStaticProps: GetStaticProps = async () =>
  ({
    props: {
      about: await getText("data/about.txt"),
      profiles: await getJson("data/profiles.json"),
      projects: await getJson("data/projects.json")
    }
  });

export default Home;
