import "./badge.css"
import classNames from "classnames"
export default function index({size, variant, color, ...rest}) {
  let sizeClass = size && `button-${size}`
  let variantClass = variant && `button-${variant}`
  let colorClass = color && `button-${color}`
  const allClassname = classNames(sizeClass, variantClass, colorClass)
  return (
    <button className={allClassname}{...rest}>Button</button>
  )
}