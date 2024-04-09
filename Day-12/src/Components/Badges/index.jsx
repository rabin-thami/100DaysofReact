import  "./badge.css"
import classNames from "classnames"

export default function Badge({children, className, size, varient,color, ...rest}) {
  let sizeClass = size && `button-${size}`
  let varientClass = varient && `button-${varient}`
  let colorClass = color && `button-${color}`
  const allClass = classNames(sizeClass, varientClass, className, colorClass)

  return (
    <button className={allClass} {...rest}>
      {children}
    </button>
  )
}