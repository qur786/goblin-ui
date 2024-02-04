interface ButtoProps {
  title: string;
}

export function Button({ title }: ButtoProps): JSX.Element {
  return <button>{title}</button>;
}
