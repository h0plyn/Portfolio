import covid_dashboard_mock from '../public/assets/covid_dashboard_mock.png'
import stooply_mock from '../public/assets/stooply_mock.png'
import wallpaper_mock from '../public/assets/wallpaper_mock.png'

export const projects = [
  {
    name: 'Stooply',
    imageUrl: stooply_mock,
    description:
      'Building hyper-local community through the gift economy',
  },
  {
    name: 'Wallpaper',
    imageUrl: wallpaper_mock,
    description: 'A marketplace for digital images',
  },
  {
    name: 'Covid Dashboard',
    imageUrl: covid_dashboard_mock,
    description: 'Covid-19 Data Visualization',
  },
]

export const history = [
  {
    title: 'Fullstack Academy',
    year: '2021',
    description: 'Software Engineering Immersive Program',
  },
  {
    title: 'Ricky Rhodes Photo',
    year: '2010-2021',
    description: 'Editorial and Advertising Photographer/Director',
  },
  {
    title: 'Ohio University',
    year: '2010',
    description: 'B.S. in Visual Communication, Photography',
  },
]

module.exports = {
  projects,
  history,
}
