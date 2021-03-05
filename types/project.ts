export type Color = {
  red: number;
  green: number;
  blue: number;
};

export type ProjectLink = {
  icon: string;
  alt: string;
  style: string;
  name: string;
  url: string;
};

export type ProjectTag = {
  color: Color;
  text: string;
};

export type Project = {
  title: string;
  description: string;
  links: ProjectLink[];
  tags: ProjectTag[];
  demoImage?: string;
};
