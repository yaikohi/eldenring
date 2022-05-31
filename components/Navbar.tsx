import Link from 'next/link'

type Props = {}

const links = [
  { href: '/', name: 'Home' },
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
]

export const Navbar = ({}: Props) => {
  return (
    <>
      <ul className="flex p-4 bg-slate-900 text-yellow-50">
        {links.map((link, index) => {
          return (
            <li key={index} className="ml-3 first:ml-0">
              <Link href={`${link.href}`}>
                <a className="capitalize"> {link.name} </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
