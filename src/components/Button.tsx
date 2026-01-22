type ButtonType = "primary" | "secondary" | "success" | "warning" | "danger";

type ButtonProps = {
  children: string;
  onClick: () => void;
  buttonType?: ButtonType;
};
const Button = ({ children, onClick, buttonType = "primary" }: ButtonProps) => {
  return (
    <div className="col-12">
      <button className={"btn btn-" + buttonType} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
