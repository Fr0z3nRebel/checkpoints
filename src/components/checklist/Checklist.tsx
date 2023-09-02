import Button from "../Button";
import { ChecklistItem, ChecklistItemProps } from "./ChecklistItem";
import { ChangeEvent, SyntheticEvent, useState } from "react";

export interface ChecklistDataProps {
  title: string;
  id: number;
  items: ChecklistItemProps[];
}

export interface ChecklistFunctionProps {
  onDelete: (params: any) => any;
}

type ChecklistProps = ChecklistDataProps & ChecklistFunctionProps;

export default function Checklist(props: ChecklistProps) {
  const [title, setTitle] = useState(props.title);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [items, setItems] = useState(props.items);

  // Checklist functions
  const handleDeleteChecklistClick = () => {
    props.onDelete(props.id);
  };
  const handleChecklistTitleFocus = () => {
    setIsEditingTitle(!isEditingTitle);
  };
  const handleUpdateChecklistTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  // ChecklistItem functions
  const handleCreateChecklistItemClick = () => {
    setItems([
      ...items,
      {
        label: "New Item",
        checked: false,
      },
    ]);
  };

  return (
    <article className="w3-card w3-margin">
      <div className="w3-bar w3-padding w3-theme">
        {isEditingTitle ? (
          <input
            className="w3-bar-item w3-input"
            type="text"
            value={title}
            onChange={handleUpdateChecklistTitle}
            onBlur={handleChecklistTitleFocus}
            autoFocus
          />
        ) : (
          <div
            className="w3-bar-item w3-padding"
            onClick={handleChecklistTitleFocus}
          >
            <b>{title}</b>
          </div>
        )}
        <div className="w3-right">
          <Button label="+" onClick={handleCreateChecklistItemClick} />
          <Button label="-" onClick={handleDeleteChecklistClick} />
        </div>
      </div>
      <div className="w3-container w3-padding">
        <div className="w3-left-align">
          {items.map((item) => (
            <ChecklistItem
              key={Math.random() + new Date().toISOString()}
              label={item.label}
              checked={item.checked}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
