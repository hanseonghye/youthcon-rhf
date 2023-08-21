import { ResumeProps, CareerProps, ProjectProps } from 'util/type';

export const defaultResumeData: ResumeProps = {
  title: '',
  profile: {
    name: '',
    email: '',
    phone: '',
  },
  introduction: '',
  careers: [],
  skills: [],
};
export const defaultCareerData: CareerProps = {
  date: { startYear: '', startMonth: '', endYear: '', endMonth: '' },
  isCurrent: false,
  companyName: '',
  department: '',
  projects: [],
};

export const defaultProjectData: ProjectProps = {
  title: '',
  date: { startYear: '', startMonth: '', endYear: '', endMonth: '' },
  description: '',
};
