import { useState } from "react";

interface ChecklistItemProps {
  label?: string;
}

function ChecklistItem(props: ChecklistItemProps) {
  const [label, setLabel] = useState(props.label || "");

  return (
    <p>
      <input className="w3-check" type="checkbox" />
      <label>&nbsp;{label}</label>
    </p>
  );
}

export default ChecklistItem;
