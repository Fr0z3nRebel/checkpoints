import React, { useState } from "react";

interface HeaderButtonProps {
  label: string;
}

function HeaderButton(props: HeaderButtonProps) {
  const [label, setLabel] = useState(props.label);

  return (
    <a href="#button" className="w3-bar-item w3-button">
      {label}
    </a>
  );
}

export default HeaderButton;
