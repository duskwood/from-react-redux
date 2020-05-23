import * as React from "react";

type Props = {
  label: string;
  onClick: (e: React.SyntheticEvent) => void;
};

export const Button: React.ComponentType<Props> = ({
  label,
  onClick
}: Props) => {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
};
