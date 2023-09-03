import Button from "../Button";
import { ChangeEvent, useState } from "react";

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
  const [isEditingLabel, setIsEditingLabel] = useState(false);

  const labelStyle = {
    color: isChecked ? "gray" : "black",
    marginLeft: 8,
    textDecoration: isChecked ? "line-through" : "none",
  };

  const inputStyle = {
    border: 0,
    padding: "0px 0px 0px 4px",
    marginLeft: 4,
    display: "inline",
  };

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const handleChecklistItemLabelFocus = () => {
    setIsEditingLabel(!isEditingLabel);
  };
  const handleUpdateChecklistItemLabel = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setLabel(event.target.value);
  };
  const handleDeleteChecklistItemClick = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="w3-border-bottom w3-border-light-grey w3-hover-light-grey">
      <div className="w3-padding w3-margin-bottom-small">
        <input
          className="w3-check"
          onChange={handleChange}
          checked={isChecked}
          type="checkbox"
        />
        {isEditingLabel ? (
          <input
            style={inputStyle}
            type="text"
            value={label}
            onChange={handleUpdateChecklistItemLabel}
            onBlur={handleChecklistItemLabelFocus}
            autoFocus
          />
        ) : (
          <label style={labelStyle} onClick={handleChecklistItemLabelFocus}>
            {label}
          </label>
        )}
        <div className="w3-right">
          <Button label="-" onClick={handleDeleteChecklistItemClick} />
        </div>
      </div>
    </div>
  );
}
