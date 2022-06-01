import Link from 'next/link'
import NavbarMenuItem from './NavbarMenuItem'

type Props = {}

/**
 * References
 * tailwindcss + aria attributes: https://dev.to/philw_/tying-tailwind-styling-to-aria-attributes-502f
 * creating a multi-level dropdown in react: https://blog.logrocket.com/creating-multilevel-dropdown-menu-react/
 */
const menuItems = [
  { href: '/', name: 'Home' },
  {
    href: '/eldenring',
    name: 'Elden Ring',
    submenu: [
      { href: '/eldenring/ammos', name: 'Ammo' },
      { href: '/eldenring/armors', name: 'Armor' },
      { href: '/eldenring/ashes', name: 'Ashes of War' },
      { href: '/eldenring/bosses', name: 'Bosses' },
      { href: '/eldenring/classes', name: 'Classes' },
      { href: '/eldenring/creatures', name: 'Creatures' },
      { href: '/eldenring/incantations', name: 'Incantations' },
      { href: '/eldenring/items', name: 'Items' },
      { href: '/eldenring/locations', name: 'Locations' },
      { href: '/eldenring/npcs', name: 'Npcs' },
      { href: '/eldenring/shields', name: 'Shields' },
      { href: '/eldenring/sorceries', name: 'Sorceries' },
      { href: '/eldenring/spirits', name: 'Spirits' },
      { href: '/eldenring/talismans', name: 'Talismans' },
      { href: '/eldenring/weapons', name: 'Weapons' },
    ],
  },
]

export const Navbar = ({}: Props) => {
  return (
    <>
      <ul className="flex p-4 bg-slate-900 text-yellow-50">
        {menuItems.map((link, index) => {
          return <NavbarMenuItem key={index} link={link} />
        })}
      </ul>
    </>
  )
}
