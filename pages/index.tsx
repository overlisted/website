import {Project} from "types/project";
import {Account} from "types/account";
import {AccountRow} from "components/AccountRow";
import {ProjectCard} from "components/ProjectCard";

const ProjectsSection = ({ projects }: { projects: Project[] }) =>
  <section className="flex-col p-4 gap-6 bg-gray-200 items-center">
    <span className="text-2xl font-medium">Hall of My Projects</span>
    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
      {projects.map(it => <ProjectCard key={it.title} project={it}/>)}
    </div>
  </section>;

const aboutText = "Hello there! I'm a young programmer, and I just enjoy messing around with computers. Occasionally, I also try to do UI design (this whole site is designed by me).";
const TopSection = ({ accounts }: { accounts: Account[] }) =>
  <section className="bg-white p-4 flex-col gap-4 layout-shadow z-10">
    <span className="text-4xl font-medium">overlisted</span>
    <div className="gap-10" style={{ width: "72rem" }}>
      {aboutText}
      <div className="gap-2 grid-cols-1">
        {accounts.map(it => <AccountRow key={it.url ?? `${it.user}@${it.service}`} account={it}/>)}
      </div>
    </div>
  </section>;

const projects: Project[] = [{
  title: "You Don't Need JavaScript",
  description: "Some examples proving that JavaScript might in fact not be needed for your website and that CSS is nowadays already powerful enough.",
  links: [
    {
      icon: "/github.png",
      alt: "GitHub",
      style: "bg-github text-white",
      name: "Repository",
      url: "https://github.com/you-dont-need/You-Dont-Need-JavaScript"
    },
    {
      icon: "/npm.png",
      alt: "NPM",
      style: "bg-white text-npm border-2 border-solid border-npm",
      name: "Package",
      url: "https://npmjs.com/you-dont-need-javascript"
    }
  ],
  tags: [
    { color: { red: 0x1d, green: 0xd5, blue: 0x36 }, text: "Maintained" },
    { color: { red: 0x56, green: 0x3d, blue: 0x7d }, text: "CSS" },
    { color: { red: 0x08, green: 0x3f, blue: 0xa1 }, text: "Markdown" }
  ]
}];

projects[1] = projects[0]
projects[2] = projects[0]

const accounts: Account[] = [{
  icon: "/github-black.png",
  service: "GitHub",
  user: "overlisted",
  url: "http://github.com/overlisted"
}];

const Home = () => <div className="flex-col">
  <TopSection accounts={accounts}/>
  <ProjectsSection projects={projects}/>
</div>

export default Home;
