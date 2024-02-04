interface ButtoProps {
  title: string;
}

export function Button({ title }: ButtoProps): JSX.Element {
  return (
    <button className="bg-black text-white dark:text-black dark:bg-white py-2 px-4 rounded-sm">
      {title}
    </button>
  );
}
