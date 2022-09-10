// in this type we can pass anthing in childrenprops 
// type ButtonProps = {
//     variant: 'primary' | 'secondary'
// } & React.ComponentProps<'button'>


//syntax omit
// omit angle bracket and type which we want to emit the properties which is button followed by comma then type which we want to emit type that is children
type ButtonProps = {
    variant: 'primary' | 'secondary'
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

const Button = ({ variant, children, ...rest }: ButtonProps) => {

    return (
  
        <button className={`class-with-${variant}`} {...rest}>{children}</button>
    )
}

export default Button