/**
 * v0 by Vercel.
 * @see https://v0.dev/t/SYGS39amE3z
 */
import Link from "next/link"

export default function NavBar() {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b">
      <div className="flex items-center gap-2">
        <Link className="flex items-center gap-2" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link  className="text-sm hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link href="/services"  className="text-sm hover:underline underline-offset-4">
            Services
          </Link>
          <Link className="text-sm hover:underline underline-offset-4" href="/portfolio">
            Portfolio
          </Link>
          <Link className="text-sm hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </div>
      <div className="flex gap-4">
        <Link href="#">
          <TwitterIcon className="h-6 w-6" />
        </Link>
        <Link href="#">
          <InstagramIcon className="h-6 w-6" />
        </Link>
      </div>
    </header>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}