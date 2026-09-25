export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description?: string;
  tags?: string[];
  images: {
    col1Top: string;
    col1Bottom: string;
    col2: string;
  };
  liveUrl?: string;
}
