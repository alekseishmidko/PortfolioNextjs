/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../../src/styles/logo.module.scss";

const Logo = ({ marginBottom }: { marginBottom?: number }) => (
  <Link href="/">
    <img
      src="portfolio/public/img/logo.svg"
      alt="logo"
      className={styles.logo}
      style={{ marginBottom }}
    />
  </Link>
);

export default Logo;
