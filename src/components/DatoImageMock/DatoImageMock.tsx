import { SvgAspectRatio } from "../SvgAspectRatio/SvgAspectRatio"
import image from "./assets/image.jpg"

export type DatoImageMockProps = {
  arWidth: number
  arHeight: number
  width?: number
  imageUrl?: string
}

/**
 * Mocks responsive DatoImage and ImgIx aspect ratio API for storybook use
 */
export function DatoImageMock({
  arWidth,
  arHeight,
  width,
}: DatoImageMockProps) {
  return (
    <div className="w-full h-full relative">
      <SvgAspectRatio
        width={arWidth}
        height={arHeight}
        style={{ width: width + "px" }}
      />
      <img
        src={image}
        className="absolute inset-0 w-full h-full object-cover object-center"
        alt=""
      />
    </div>
  )
}
