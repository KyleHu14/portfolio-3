// React
import { useState } from "react";

// Next Links
import Link from "next/link";
import Image from "next/image";

// CSS
import NavStyles from "@/styles/components/Navbar.module.css";

const Navbar = () => {
    const [showMobileNavbar, setMobileNavBar] = useState(false);

    const handleMenuClick = () => {
		setMobileNavBar(!showMobileNavbar);
    }

	return (
		<nav className={NavStyles.navContainer}>
            {/* Main Navbar that laptop devices see */}
			<div className={NavStyles.mainNavBar}>
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

            {/* Mobile Navbar */}
            <div className={NavStyles.mobileNavbar}>
                <Image className={NavStyles.MenuIcon} src="/icons/Bars3.svg" width={50} height={50} alt="" onClick={handleMenuClick}/>
				{ showMobileNavbar ? 
					(
						<div className={NavStyles.mobileDropDown}>
							<div className={NavStyles.mobileNavLink}>Home</div>
							<div className={NavStyles.mobileNavLink}>Projects</div>
							<div className={NavStyles.mobileNavLink}>Blog</div>
						</div>
					) : null
				}
                
            </div>
            
		</nav>
	);
};

export default Navbar;
