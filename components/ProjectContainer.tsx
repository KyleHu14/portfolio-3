// NextJS
import Link from "next/link";
import Image from "next/image";

// Styles
import styles from "@/styles/components/ProjectContainer.module.css";

interface ProjectDisplayProps{
	title: string
	desc: string
	github_link:string
	website_link:string
}

const LangLogo = () => {
	return (
		<div className={styles.logo}>
			<div>React</div>
			<Image src="/icons/react.svg" height={17} width={17} alt=""/>
		</div>
	)
}

const ProjectDisplay = ({ title, desc, github_link, website_link }: ProjectDisplayProps) => {
	return (
		<div className={styles.container}>
			{/* First row of the project container */}
			<div className={styles.topRow}>
				<div className={styles.title}>{title}</div>
				<LangLogo />
			</div>
			
			<div className={styles.text}>
				{desc}
			</div>
			<div className={styles.bottomLinks}>
				<Link href={website_link} className={styles.botLink}>View Site</Link>
				<Link href={github_link} className={styles.botLink}>Github</Link>
			</div>
		</div>
	);
};

export default ProjectDisplay;
