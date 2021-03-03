import {Color, Project, ProjectTag} from "types/project";
import {Button} from "./Button.tsx";
import Image from "next/image";

const rgbComponentToHex = (component: number) => component.toString(16).padStart(2, "0");
const colorToHex = ({red, green, blue}: Color) =>
  `#${rgbComponentToHex(red)}${rgbComponentToHex(green)}${rgbComponentToHex(blue)}`;

const ProjectTagView = ({ tag }: { tag: ProjectTag } ) =>
  <div
    className={`rounded-t-md px-2 py-1 shadow-md font-medium select-none`}
    style={{
      backgroundColor: colorToHex(tag.color),
      color: tag.color.red >= 128 && tag.color.green >= 128 && tag.color.blue >= 128 ? "black" : "white"
    }}
  >
    {tag.text}
  </div>;

export const ProjectCard = ({ project }: { project: Project }) =>
  <div className="flex-col">
    <div className="px-4 gap-2">
      {project.tags.map(it => <ProjectTagView key={it.text} tag={it}/>)}
    </div>
    <div className="bg-white shadow rounded-lg bg-bottom p-4 gap-2 flex-col h-64" style={{ width: "35rem" }}>
      <span className="text-3xl font-medium">{project.title}</span>
      {project.description}
      <div className="flex-row-reverse mt-auto gap-4">
        {project.links.map(it =>
          <Button
            key={it.url}
            style={`text-2xl font-medium items-center ${it.style}`}
            onClick={() => window.open(it.url, "_blank")}
          >
            <Image src={it.icon} alt={it.alt} width={32} height={32}/>
            {it.name}
          </Button>
        )}
      </div>
    </div>
  </div>;
