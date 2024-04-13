type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  //   onClick: () => void;
};

export default function Button({
  children,
  className,
}: // onClick
ButtonProps) {
  return (
    <button
      className={`p-3 rounded-md text-lg tracking-wider ${className}`}
      //   onClick={onClick}
    >
      {children}
    </button>
  );
}
