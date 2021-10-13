/** @format */
import * as styles from "./styles.module.css";

function ArrowDown() {
	return (
		<svg
			className={styles.arrowSvg}
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>{"Arrow"}</title>
			<path
				d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
				stroke="currentColor"
				strokeWidth={2}
			/>
		</svg>
	);
}

export default ArrowDown;
