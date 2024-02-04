interface ButtoProps {
  title: string;
}

export function Button({ title }: ButtoProps): JSX.Element {
  return (
    <button className="bg-black text-white dark:text-black dark:bg-white">
      {title}
    </button>
  );
}
