export interface Project {
  id: string;
  heading: string;
  subheading: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  liveDemoUrl?: string;
  sourceCodeUrl?: string;
  imageDemoUrl?: string;
}
