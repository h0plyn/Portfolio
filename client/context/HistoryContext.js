import { createContext } from 'react';

export const history = [
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
];

const HistoryContext = createContext(history);

export const HistoryProvider = HistoryContext.Provider;

export default HistoryContext;
