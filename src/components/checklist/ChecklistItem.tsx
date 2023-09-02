import Button from "../Button";
import { useState } from "react";

export interface ChecklistItemDataProps {
  checked?: boolean;
  id?: number;
  label: string;
}

interface ChecklistItemFunctionProps {
  onDelete: (params: any) => any;
}

type ChecklistItemProps = ChecklistItemDataProps & ChecklistItemFunctionProps;

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

  const handleDeleteChecklistItemClick = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="w3-border-bottom w3-border-light-grey w3-padding w3-hover-light-grey">
      <div className="">
        <input
          className="w3-check"
          onChange={handleChange}
          checked={isChecked}
          type="checkbox"
        />
        <label style={style}>{label}</label>
        <div className="w3-right">
          <Button label="-" onClick={handleDeleteChecklistItemClick} />
        </div>
      </div>
      <div className="w3-padding-small"></div>
    </div>
  );
}
