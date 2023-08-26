import React, { useState } from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const [label, setLabel] = useState(props.label);

  return (
    <a
      href="#button"
      className="w3-bar-item w3-button"
      onClick={props.onClick || undefined}
    >
      {label}
    </a>
  );
}
