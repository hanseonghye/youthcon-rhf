export interface ResumeProps {
  title: string;
  profile: ProfileProps;
  introduction: string;
  careers: CareerProps[];
  skills: { key: string; label: string }[];
}

export interface ProfileProps {
  name: string;
  email: string;
  phone: string;
}

export interface CareerProps {
  date: {
    startYear: string;
    startMonth: string;
    endYear: string;
    endMonth: string;
  };
  isCurrent: boolean;
  companyName: string;
  department: string;
  projects: ProjectProps[];
}

export interface ProjectProps {
  title: string;
  date: {
    startYear: string;
    startMonth: string;
    endYear: string;
    endMonth: string;
  };
  description: string;
}
