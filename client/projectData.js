import covid_dashboard_mock from '../public/assets/covid_dashboard_mock.png'
import stooply_mock from '../public/assets/stooply_mock.png'
import wallpaper_mock from '../public/assets/wallpaper_mock.png'

export const projects = [
  { name: 'Stooply', imageUrl: stooply_mock },
  { name: 'Wallpaper', imageUrl: wallpaper_mock },
  { name: 'Covid Dashboard', imageUrl: covid_dashboard_mock },
]

export const experience = [
  {
    title: 'Fullstack Academy',
    year: '2021',
    description:
      'A 17-week Software Engineering Immersive. Built Fullstack JavaScript applications through team and individual projects. Gained experience in pair programing & technical project management.',
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
  experience,
  covid_dashboard_mock,
  stooply_mock,
  wallpaper_mock,
}
