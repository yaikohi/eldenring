import Link from 'next/link'

type Props = {
  link: {
    href: string
    name: string
  }
}

function NavbarMenu({ link }: Props) {
  return (
    <>
      <li className="ml-3 first:ml-0">
        <Link href={`${link.href}`}>
          <a className="capitalize"> {link.name} </a>
        </Link>
      </li>
    </>
  )
}

export default NavbarMenu
