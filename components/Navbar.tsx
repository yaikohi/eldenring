import Link from 'next/link'

type Props = {}

const eldenRingLinks = [
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
      <div className="max-w-md mx-auto">
        <div className="flex flex-row">
          <Link href="/">
            <a className="p-2 text-2xl">Profile</a>
          </Link>
          <div className="w-full max-w-fit group">
            <button className="px-2 py-2 text-2xl rounded-lg group-hover:rounded-t-lg group-hover:rounded-b-none dark:text-white bg-slate-200 dark:bg-slate-900">
              Elden Ring
            </button>
            <div>
              <ul className="absolute z-50 hidden w-full max-w-sm px-4 pt-2 overflow-y-scroll max-h-64 group-hover:block bg-slate-200 dark:bg-slate-900 dark:text-yellow-50">
                {eldenRingLinks.map((link, index) => {
                  return (
                    <li
                      key={index}
                      className="p-3 text-xl rounded-md hover:bg-slate-300 dark:hover:bg-slate-700"
                    >
                      <Link href={`${link.href}`}>
                        <a className="capitalize"> {link.name} </a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
