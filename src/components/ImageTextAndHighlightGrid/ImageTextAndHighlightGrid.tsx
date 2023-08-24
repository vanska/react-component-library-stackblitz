import clsx from "clsx"
import { ComponentArea } from "../ComponentArea/ComponentArea"
import { DatoImageMock } from "../DatoImageMock/DatoImageMock"
import styles from "./imageTextAndHighlightGrid.module.css"

export function ImageTextAndHighlightGrid() {
  return (
    <ComponentArea>
      <section className={clsx(styles.container)}>
        <div className={styles.primaryImageCell}>
          <DatoImageMock arWidth={1} arHeight={1.5} />
        </div>
        <div className={styles.content}>
          <p>
            {
              "Gustavo on kauden parhaiden raaka-aineiden, välimeri-inspiraation ja Aurajoen erityisen tunnelman herkkä törmäytys. Täällä kohtaavat käsin valitut viinit sekä parhaimmat palat mm. Italiasta, Ranskasta, Espanjasta – Välimeren rannoilta. Gustavossa umami ja hapan sekoittuvat huumaavasti hentoon makeuteen. Ja tuota leipää on tänäänkin jo mennyt uuniin, tervetuloa."
            }
          </p>
        </div>
        <div className={styles.overlapContainer}>
          <DatoImageMock arWidth={16} arHeight={9} />
          <DatoImageMock arWidth={1} arHeight={1.5} />
        </div>
      </section>
    </ComponentArea>
  )
}
