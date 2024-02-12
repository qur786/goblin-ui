interface ButtoProps {
  title: string;
}

export function Button({ title }: ButtoProps): JSX.Element {
  return (
    <button className="gb-bg-black gb-text-white dark:gb-text-black dark:gb-bg-white gb-py-2 gb-px-4 gb-rounded-2xl">
      {title}
    </button>
  );
}
