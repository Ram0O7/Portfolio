import Link from "next/link";

const Button = ({ url, text }) => {
  return (
    <Link href={url} className="btn relative uppercase tracking-widest pb-1">
      {text}
    </Link>
  );
};

export default Button;
