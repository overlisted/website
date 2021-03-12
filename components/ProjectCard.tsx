import { Color, Project, ProjectTag } from "types/project";
import { Button } from "./Button";
import Image from "next/image";
import { FC } from "react";

const rgbComponentToHex = (component: number) => component.toString(16).padStart(2, "0");
const colorToHex = ({ red, green, blue }: Color) =>
  `#${rgbComponentToHex(red)}${rgbComponentToHex(green)}${rgbComponentToHex(blue)}`;

const fullGrayComponent = 128;
const isBright = ({ red, green, blue }: Color) =>
  red >= fullGrayComponent || green >= fullGrayComponent || blue >= fullGrayComponent;

const ProjectTagView = ({ tag }: { tag: ProjectTag }) =>
  <div
    className={"rounded-t-md px-2 py-1 shadow-md select-none"}
    style={{
      backgroundColor: colorToHex(tag.color),
      color: isBright(tag.color) ? "black" : "white"
    }}
  >
    {tag.text}
  </div>;

export const ProjectCard: FC<{ project: Project }> = ({ project }) =>
  <div className={`flex-col ${project.demoImage ? "row-span-2" : ""}`}>
    <div className="px-4 gap-2">
      {project.tags.map(it => <ProjectTagView key={it.text} tag={it}/>)}
    </div>
    <div
      className={`
        bg-white shadow rounded-lg bg-bottom p-4 gap-2 flex-col bg-contain bg-no-repeat
        ${project.demoImage ? "h-full" : "h-56"}
      `}
      style={{ backgroundImage: `url(${project.demoImage})` }}
    >
      <span className="text-2xl font-medium">{project.title}</span>
      <span className="line-clamp-4 max-h-28">{project.description}</span>
      <div className="flex-row-reverse mt-auto gap-4">
        {project.links.map(it =>
          <Button
            key={it.url}
            style={`text-xl font-medium items-center ${it.style}`}
            onClick={() => window.open(it.url, "_blank")}
          >
            <Image src={it.icon} alt={it.alt} width={24} height={24}/>
            {it.name}
          </Button>)}
      </div>
    </div>
  </div>;
