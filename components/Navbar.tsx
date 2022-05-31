import Link from 'next/link'

type Props = {}

const links = [
  { href: '/', name: 'Home' },
  { href: 'ammo', name: 'Ammo' },
  { href: 'armor', name: 'Armor' },
  { href: 'ashes', name: 'Ashes' },
  { href: 'bosses', name: 'Bosses' },
  { href: 'classes', name: 'Classes' },
  { href: 'creatures', name: 'Creatures' },
  { href: 'incantations', name: 'Incantations' },
  { href: 'items', name: 'Items' },
  { href: 'locations', name: 'Locations' },
  { href: 'npcs', name: 'Npcs' },
  { href: 'shields', name: 'Shields' },
  { href: 'sorceries', name: 'Sorceries' },
  { href: 'spirits', name: 'Spirits' },
  { href: 'talismans', name: 'Talismans' },
  { href: 'weapons', name: 'Weapons' },
]

export const Navbar = ({}: Props) => {
  return (
    <>
      <ul className="flex p-4 bg-slate-900 text-yellow-50">
        {links.map((link, index) => {
          return (
            <li key={index} className="ml-3 first:ml-0">
              <Link href={`/${link.href}`}>
                <a className="capitalize"> {link.name} </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
