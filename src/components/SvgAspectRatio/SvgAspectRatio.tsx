import clsx from "clsx"
import { CSSProperties } from "react"
import styles from "./svgAspectRatio.module.css"

export type SvgAspectRatioProps = {
  width: number
  height: number
  className?: string
  style?: CSSProperties
}

/**
 * Svg box aspect ratio "polyfill"
 */
export function SvgAspectRatio({
  width,
  height,
  className,
  style,
}: SvgAspectRatioProps) {
  return (
    <svg
      className={clsx(styles.svg, className)}
      style={style}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    />
  )
}
