interface propsInterface extends React.ButtonHTMLAttributes<HTMLButtonElement>{
}

export function Button({children, ...props}: propsInterface) {
  return (
    <button className=" w-24 bg-grey rounded h-6 text-sm border-2 border-aura font-marce hover:bg-yellow transition-all ease-in-out duration-300 md:w-32 md:h-8 md:text-base" {...props}>{children}</button>
  )
}
