"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar() {
  const pathName = usePathname();
  return (
    <div className="navbar">
      <nav className="navbar">
        <ul>
          <li>
            <Link className={pathName === '/' ? 'font-bold' : 'nav-item'} href="/">
              Home
            </Link>
          </li>

          <li>
            <Link className={pathName === '/about-me' ? 'font-bold' : 'nav-item'} href="/about-me">
              About Me
            </Link>
          </li>
          
          <li>
            <Link className={pathName === '/Blog' ? 'font-bold' : 'nav-item'} href="/Blog">
              Blog
            </Link>
          </li>

          <li>
            <a className={pathName === '/resume' ? 'font-bold' : 'nav-item'} href="https://overleaf.com">
              View Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
