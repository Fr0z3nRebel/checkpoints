import { useState } from "react";

interface ChecklistItemProps {
  label?: string;
}

function ChecklistItem(props: ChecklistItemProps) {
  const [label, setLabel] = useState(props.label || "");

  return (
    <p>
      <input type="checkbox" />
      <label>{label}</label>
    </p>
  );
}

export default ChecklistItem;
