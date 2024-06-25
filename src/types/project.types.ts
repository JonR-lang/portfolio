export type ProjectType = {
  id: string;
  rating: number;
  title: string;
  short_description: string;
  alt: string;
  thumbnail: {
    mobileSrc: string;
    desktopSrc: string;
  };
  live_url: string;
  github: string;
  type: string;
  status: string;
  stack: string[];
  category: string;
  theme: string;
};
