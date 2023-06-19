// NextJS
import Image from "next/image";

// Styles
import styles from "@/styles/components/ProjectContainer.module.css";

interface ProjectDisplayProps{
	title: string
	desc: string
}

const ProjectDisplay = ({ title, desc }: ProjectDisplayProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>{title}</div>
			<div className={styles.text}>
				{desc}
			</div>
			<div className={styles.bottomLinks}>
				<div className={styles.botLink}>View Site</div>
				<div className={styles.botLink}>Github</div>
			</div>
		</div>
	);
};

export default ProjectDisplay;
