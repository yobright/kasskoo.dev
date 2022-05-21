import { useRouter } from "next/router";

import styles from '../styles/Header.module.css' 

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href='/' >GERALD</Link>
            <Link href="/about">About</Link>
        </header>
    )
}


const Link = ({ children, href, blanktarg }) => {
  const router = useRouter();
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        router.push(href);
      }}
    >
      {children}
    </a>
  );
};
