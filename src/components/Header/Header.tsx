import styles from "./header.module.css"

export function Header({ children }: { children: React.ReactNode }) {
  return <header className={styles.header}>{children}</header>
}
