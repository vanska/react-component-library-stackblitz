import styles from "./lead.module.css"

export function Lead({ children }: { children: React.ReactNode }) {
  return <div className={styles.styles}>{children}</div>
}
