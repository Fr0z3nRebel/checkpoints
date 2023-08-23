import React, { useState } from "react";

interface ChecklistButtonProps {
  label: string;
}

function ChecklistButton(props: ChecklistButtonProps) {
  const [label, setLabel] = useState(props.label);

  return (
    <a href="#checklistbutton" className="w3-bar-item w3-button">
      {label}
    </a>
  );
}

export default ChecklistButton;
