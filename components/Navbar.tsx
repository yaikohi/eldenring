import Link from 'next/link'

type Props = {}

const links = [
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

export const Navbar = ({ }: Props) => {
  return (
    <>
      <div className="w-full bg-red-200 max-w-fit group">
        <button className="px-2 py-2 bg-fuchsia-200">navbar2</button>
        <div>
          <ul className="absolute hidden w-full max-w-sm p-4 group-hover:block bg-slate-900 text-yellow-50">
            {links.map((link, index) => {
              return (
                <li key={index} className="ml-3 first:ml-0 hover:bg-slate-700">
                  <Link href={`${link.href}`}>
                    <a className="capitalize"> {link.name} </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
