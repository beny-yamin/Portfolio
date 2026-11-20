export interface MetricItem {
  label: string;
  value: string;
}

export interface ProjectStory {
  problem: string;
  solution: string;
  architecture: string;
}

export interface Project {
  _id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Full-Stack Systems' | 'PWAs & Productivity' | 'AI & Civic Tech';
  accentColor: 'cyan' | 'amber' | 'emerald' | 'violet';
  orderIndex: number;
  techStack: string[];
  highlights: string[];
  previewType: 'cafeteria-demo' | 'expense-chart' | 'habit-grid' | 'markdown-live' | 'static-gallery';
  thumbnailUrl: string;
  liveUrl: string;
  githubUrl: string;
  metrics: MetricItem[];
  story: ProjectStory;
}

export interface InnerValue {
  title: string;
  description: string;
  principle: string;
}

export interface JourneyMilestone {
  year: string;
  title: string;
  story: string;
  tags: string[];
}

export interface VisionPillar {
  phase: string;
  title: string;
  description: string;
  horizon: string;
}

export interface Opportunity {
  title: string;
  description: string;
  active: boolean;
  tag: string;
}

export interface ProfileConfig {
  fullName: string;
  portraitUrl: string;
  headline: string;
  subheadline: string;
  scrollManifestoLines: string[];
  aboutStory: string[];
  innerValues: InnerValue[];
  journeyMilestones: JourneyMilestone[];
  location: string;
  timezone: string;
  availabilityStatus: string;
  visionPillars: VisionPillar[];
  opportunities: Opportunity[];
  socials: {
    github: string;
    linkedin: string;
    telegram: string;
    email: string;
    phone: string;
  };
}

export interface ContactMessage {
  _id?: string;
  senderName: string;
  senderEmail: string;
  opportunityType: string;
  message: string;
  createdAt?: string;
}
