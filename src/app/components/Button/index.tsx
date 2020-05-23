import * as React from "react";

type Props = {
  onClick: (e: React.SyntheticEvent<EventTarget>) => void;
  children: React.ReactNode;
};

export const Button: React.ComponentType<Props> = ({
  onClick,
  children,
}: Props) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
);
