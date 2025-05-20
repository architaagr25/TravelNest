import Image from "next/image";

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
}

const Button = ({type, title, icon, variant}: ButtonProps) => {
  return (
    <button

    className={`flexCenter gap-3 rounded-full border ${variant} transform hover:scale-105 transition-transform duration-200 shadow-md hover:shadow-xl`}

    type={type}
    >
       {icon && <Image src={icon} alt={title} width={26} height={26} />}
        <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button