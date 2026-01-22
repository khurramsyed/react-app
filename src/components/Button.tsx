
type ButtonType = "primary" | "secondary" | "success" | "warning" | "danger";
type ButtonProps {
    children: string
    onClick: () => void;
    buttonType? :ButtonType ="primary"

}
const Button = ({children,onClick,buttonType}: ButtonProps) => {
  return (
    <div>
        <button className={"btn btn-"+buttonType} onClick={onClick}>children</button>
    </div>
  )
}

export default Button