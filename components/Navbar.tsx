// Next Links
import Link from "next/link";

// CSS
import NavStyles from "@/styles/components/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={NavStyles.navContainer}>
        <div className={NavStyles.nav}>
            <Link
                className={`${NavStyles.linkControl} ${NavStyles.homeLink}`}
                href="/">
                Welcome!
            </Link>
            <div className={NavStyles.navRight}>
                <Link
                    className={`${NavStyles.linkControl} ${NavStyles.rightLink}`}
                    href="/">
                    Home
                </Link>
                <Link
                    className={`${NavStyles.linkControl} ${NavStyles.rightLink}`}
                    href="/projects">
                    Projects
                </Link>
                <Link
                    className={`${NavStyles.linkControl} ${NavStyles.rightLink}`}
                    href="/">
                    Blog
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar