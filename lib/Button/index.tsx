interface ButtoProps {
  title: string;
  variant: "contained" | "outlined" | "text";
  background: "primary" | "secondary";
}

export function Button({
  title,
  variant = "contained",
  background = "primary",
}: ButtoProps): JSX.Element {
  const variantClass = {
    root: "gb-rounded-md",
    contained: {
      root: "",
      primary: "gb-bg-primary",
      secondary: "gb-bg-secondary",
    },
    outlined: {
      root: "gb-border gb-border-gray-300",
      primary: "gb-text-primary",
      secondary: "gb-text-secondary",
    },
    text: {
      root: "",
      primary: "gb-text-primary",
      secondary: "gb-text-secondary",
    },
  };

  return (
    <button
      className={`gb-text-white dark:gb-text-black dark:gb-bg-white gb-py-2 gb-px-4 ${variantClass.root} ${variantClass[variant].root} ${variantClass[variant][background]}`}
    >
      {title}
    </button>
  );
}
