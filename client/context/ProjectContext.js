import { createContext } from 'react';
import covid_dashboard_mock from '../../public/assets/covid_dashboard_mock.png';
import stooply_mock from '../../public/assets/stooply_mock.png';
import wallpaper_mock from '../../public/assets/wallpaper_mock.png';
import dsld_v3 from '../../public/assets/dsld_v3.png';

export const projects = [
  {
    id: 1,
    name: 'Stooply',
    imageUrl: stooply_mock,
    description: 'Building hyper-local community through the gift economy',
    projectUrl: 'https://github.com/h0plyn/stooply',
    aspect: 'vertical',
  },
  {
    id: 2,
    name: 'DSLD',
    imageUrl: dsld_v3,
    description: 'Workout form checking companion',
    projectUrl: 'https://github.com/2011-FSA-CRAB/DSLD',
    aspect: 'horizontal',
  },
  {
    id: 3,
    name: 'Wallpaper',
    imageUrl: wallpaper_mock,
    description: 'A marketplace for digital images',
    projectUrl: 'https://github.com/2011-FSA-Alpha/GraceShopper',
    aspect: 'horizontal',
  },
  {
    id: 4,
    name: 'Covid Dashboard',
    imageUrl: covid_dashboard_mock,
    description: 'Covid-19 Data Visualization',
    projectUrl: 'https://github.com/garretthaas/covid-dashboard',
    aspect: 'horizontal',
  },
];

const ProjectContext = createContext(projects);
export const ProjectProvider = ProjectContext.Provider;
export default ProjectContext;
