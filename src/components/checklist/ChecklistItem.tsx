import { useState } from "react";

export interface ChecklistItemProps {
  label: string;
  checked?: boolean;
}

export function ChecklistItem(props: ChecklistItemProps) {
  const [label, setLabel] = useState(props.label);
  const [isChecked, setIsChecked] = useState(props.checked || false);

  const style = {
    color: isChecked ? "gray" : "black",
    marginLeft: 5,
    textDecoration: isChecked ? "line-through" : "none",
  };

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <p>
      <input
        className="w3-check"
        onChange={handleChange}
        checked={isChecked}
        type="checkbox"
      />
      <label style={style}>{label}</label>
    </p>
  );
}
