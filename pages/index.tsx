import {Project} from "types/project";
import {Profile} from "types/profile";
import {ProfileRow} from "components/ProfileRow";
import {ProjectCard} from "components/ProjectCard";
import {GetStaticProps} from "next";
import {getJson, getText} from "lib/getJson";

const ProjectsSection = ({ projects }: { projects: Project[] }) =>
  <section className="flex-col p-4 gap-6 bg-gray-200 items-center">
    <span className="text-2xl font-medium">Hall of My Projects</span>
    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
      {projects.map(it => <ProjectCard key={it.title} project={it}/>)}
    </div>
  </section>;

const TopSection = ({ about, profiles }: { about: string, profiles: Profile[] }) =>
  <section className="bg-white p-4 flex-col gap-4 layout-shadow z-10">
    <span className="text-4xl font-medium">overlisted</span>
    <div className="gap-10" style={{ width: "72rem" }}>
      {about}
      <div className="gap-2 flex-col min-w-max items-start">
        {profiles.map(it => <ProfileRow key={it.url ?? `${it.user}@${it.service}`} profile={it}/>)}
      </div>
    </div>
  </section>;

const Home = ({ about, profiles, projects }: { about: string, profiles: Profile[], projects: Project[] }) =>
  <div className="flex-col">
    <TopSection about={about} profiles={profiles}/>
    <ProjectsSection projects={projects}/>
  </div>

export const getStaticProps: GetStaticProps = async () =>
  ({
    props: {
      about: await getText("data/about.txt"),
      profiles: await getJson("data/profiles.json"),
      projects: await getJson("data/projects.json")
    }
  })

export default Home;
