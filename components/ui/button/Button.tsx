import Loader from "../loader/Loader";

export type ButtonTypes = "default" | "loading" | "disabled";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: ButtonTypes;
};

export default function Button({
  children,
  className,
  type = "default",
}: ButtonProps) {
  const stateClassNames: Record<ButtonTypes, string> = {
    default: "",
    loading: "opacity-70",
    disabled: "opacity-50",
  };
  return (
    <button
      className={`p-3 rounded-md text-lg tracking-wider flex items-center gap-2 ${className} ${stateClassNames[type]}`}
      disabled={type === "disabled"}
    >
      {type === "loading" && <Loader />}
      {children}
    </button>
  );
}
