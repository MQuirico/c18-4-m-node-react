interface propsInterface extends React.ImgHTMLAttributes<HTMLImageElement>{}

export function ItemIcon(props:propsInterface) {
  return (
    <img {...props} className="w-8 h-auto md:w-9"></img>
  )
}
