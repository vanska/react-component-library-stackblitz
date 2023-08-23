import clsx from "clsx"
import carlicImage from "../../assets/carlic-1920.jpg"
import { itemGen } from "../../utils/utils"
import styles from "./carousel.module.css"
import { ComponentArea } from "../ComponentArea/ComponentArea"

const leads = [
  "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound",
  "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled.",
  "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound",
]

function CarouselCard({ lead }: { lead: string }) {
  return (
    <>
      <a href="/">
        <Image />
      </a>
      <div>
        <h2>
          <a href="/">Title</a>
        </h2>
        <p>{lead}</p>
        <a href="/">Link</a>
      </div>
      <div className={styles.divider} />
    </>
  )
}

export function Carousel() {
  return (
    <ComponentArea>
      <section className={clsx(styles.carousel, "scrollbar-hide")}>
        {itemGen(3).map((_, i) => (
          <CarouselCard lead={leads[i]} />
        ))}
      </section>
    </ComponentArea>
  )
}

function Image() {
  return (
    <div className={styles.imageContainer}>
      <img src={carlicImage} alt="" />
    </div>
  )
}
