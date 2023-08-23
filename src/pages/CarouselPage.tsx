import { Carousel } from "../components/Carousel/Carousel"
import { Header } from "../components/Header/Header"
import { Lead } from "../components/Lead/Lead"
import { Page } from "../components/Page/Page"
import { Title } from "../components/Title/Title"

export function CarouselPage() {
  return (
    <Page>
      <Header>
        <Title>{"Carousel"}</Title>
        <Lead>
          <p>{"This component is a carousel. Here the main features:"}</p>
          <ul>
            <li>{"Content length affects cover image aspect ratio"}</li>
            <li>{"Responsive"}</li>
            <li>{"iOS >= 12 support"}</li>
            <li>{"Supports different cover image aspect ratios"}</li>
          </ul>
          <a href="/">Link to Figma component</a>
        </Lead>
      </Header>
      <Carousel />
    </Page>
  )
}
