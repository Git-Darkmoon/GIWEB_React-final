import { ROUTES } from "@/routes/navRoutes"
import Link from "next/link"

function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-blacky/70 backdrop-blur-sm w-full px-12 py-6 flex items-center justify-between">
      <h1 className="text-4xl font-semibold text-gradient">GIWEB</h1>
      <ul className="flex gap-4 text-primary ">
        <li className="hover:text-secondary transition-colors">
          <Link href={ROUTES.HOME}>All users</Link>
        </li>
        <li className="active:scale-95 hover:scale-105 transition-transform ">
          <Link
            className="bg-gradient text-blacky px-4 py-2 rounded "
            href={ROUTES.CREATE_POST}
            rel="noopener noreferrer"
          >
            Create Post
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
