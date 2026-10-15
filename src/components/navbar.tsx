import { Link } from "react-router";

export default function Navbar() {
  return (
    <header>
      <nav className="fixed inset-x-0 top-0 z-1000 grid grid-cols-[auto_1fr] items-center justify-between gap-4 border-b border-secondary bg-white px-5 py-5 sm:px-7.5 sm:grid-cols-[auto_1fr] md:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr] lg:px-12.5">
        <Link to="/" className="text-2xl font-bold text-ink no-underline transition-colors duration-200 hover:text-secondary">
          Wanderer
        </Link>

        <div className="flex justify-center">
          <ul className="col-span-1 flex list-none items-center justify-end gap-4 p-0 sm:gap-7 lg:col-span-1 lg:justify-center lg:gap-8.75">
            <li>
              <Link to="/#packages" className="text-sm font-medium text-primary no-underline transition-colors duration-200 hover:text-secondary sm:text-base">
                Tour packages
              </Link>
            </li>
            <li>
              <Link to="/#testimonials" className="text-sm font-medium text-primary no-underline transition-colors duration-200 hover:text-secondary sm:text-base">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-sm font-medium text-primary no-underline transition-colors duration-200 hover:text-secondary sm:text-base">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}