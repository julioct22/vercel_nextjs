import { ActiveLink } from './ActiveLink'
import sytles from './Navbar.module.css'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={sytles['menu-container']}>
        {
          menuItems.map( ({text, href }) => (
            <ActiveLink key={ href } text={ text } href={ href } />
          ))
        }
    </nav>
  )
}
