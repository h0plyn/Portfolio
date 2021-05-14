import React, { useState } from 'react';
import covid_dashboard_mock from '../../public/assets/covid_dashboard_mock.png';
import stooply_mock from '../../public/assets/stooply_mock.png';
import wallpaper_mock from '../../public/assets/wallpaper_mock.png';
import dsld_v3 from '../../public/assets/dsld_v3.png';
import EventLoop from '../../public/assets/eventloop.png';

const useData = () => {
  const [history] = useState([
    {
      id: 1,
      title: 'Fullstack Academy',
      year: '2021',
      description: 'Software Engineering Teaching Fellow',
    },
    {
      id: 2,
      title: 'Fullstack Academy',
      year: '2021',
      description: 'Software Engineering Immersive Program',
    },
    {
      id: 3,
      title: 'Ricky Rhodes Photo',
      year: '2010 - 2021',
      description: 'Editorial and Advertising Photographer/Director',
    },
    {
      id: 4,
      title: 'Ohio University',
      year: '2010',
      description: 'B.S. in Visual Communication, Photography',
    },
  ]);
  const [projects] = useState([
    {
      projectId: 1,
      name: 'Stooply',
      imageUrl: stooply_mock,
      description: 'Building hyper-local community through the gift economy',
      projectUrl: 'https://github.com/h0plyn/stooply',
      aspect: 'vertical',
    },
    {
      projectId: 2,
      name: 'DSLD',
      imageUrl: dsld_v3,
      description: 'Workout form checking companion',
      projectUrl: 'https://github.com/2011-FSA-CRAB/DSLD',
      aspect: 'horizontal',
    },
    {
      projectId: 3,
      name: 'Covid Dashboard',
      imageUrl: covid_dashboard_mock,
      description: 'Covid-19 Data Visualization',
      projectUrl: 'https://github.com/garretthaas/covid-dashboard',
      aspect: 'horizontal',
    },
    {
      projectId: 4,
      name: 'Wallpaper',
      imageUrl: wallpaper_mock,
      description: 'A marketplace for digital images',
      projectUrl: 'https://github.com/2011-FSA-Alpha/GraceShopper',
      aspect: 'horizontal',
    },
    {
      projectId: 5,
      name: "JavaScript's Event Loop",
      imageUrl: EventLoop,
      description: 'A blog post explaining the Event Loop',
      projectUrl:
        'https://rickyrhodes.medium.com/single-threaded-but-asynchronous-the-javascript-event-loop-77e2ec86b04e',
      aspect: 'horizontal',
    },
  ]);

  return { history, projects };
};

export default useData;
