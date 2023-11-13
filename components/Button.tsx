import Image from "next/image";

type ButtonProps = {
  type: "button";
  title: string;
  icon?: string;
  color?: string;
  height: number;
  width: number;
};

const Button = ({ type, title, icon, color, height, width }: ButtonProps) => {
  return (
    <button
      className={`px-2 rounded-lg border-2 hover:border-black ${color}`}
      type={type}
    >
      <Image src={`${icon}`} alt={title} width={width} height={height} />
      {}
    </button>
  );
};

export default Button;
