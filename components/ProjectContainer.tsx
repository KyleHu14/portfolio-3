// NextJS
import Image from "next/image";

// Styles
import styles from "@/styles/components/ProjectContainer.module.css";

const ProjectDisplay = () => {
	return (
		<div className={styles.container}>
      {/* Project Image */}
      <div>
        <Image
          src="/projectImages/watchme.png"
          height={125}
          width={220}
          unoptimized={true}
          alt=""
        />
      </div>

      {/* Project Description */}
			<div>
				<div>VueJS Custom Watch UI Website</div>
				<div>
					This is a website that allows users to create a new UI
					layout for their Fitbit watch. The foundation of the website
					was already written and my responsibilities were to maintain
					and add new features that were discussed during weekly
					meetings. This project strengthened my communication skills
					and my ability to work independently.
				</div>
			</div>
		</div>
	);
};

export default ProjectDisplay;