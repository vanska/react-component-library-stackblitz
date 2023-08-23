import styles from "./componentArea.module.css"

export function ComponentArea({ children }: { children: React.ReactNode }) {
  return <section className={styles.componentArea}>{children}</section>
}
