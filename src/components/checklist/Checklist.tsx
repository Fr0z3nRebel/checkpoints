import Button from "../Button";
import { ChecklistItem, ChecklistItemProps } from "./ChecklistItem";
import { useState } from "react";

export interface ChecklistDataProps {
  title: string;
  uniqueId: number;
  items: ChecklistItemProps[];
}

export interface ChecklistFunctionProps {
  onDelete: (params: any) => any;
}

type ChecklistProps = ChecklistDataProps & ChecklistFunctionProps;

export default function Checklist(props: ChecklistProps) {
  const [title, setTitle] = useState(props.title);
  const [uniqueId, setUniqueId] = useState(props.uniqueId);
  const [items, setItems] = useState(props.items);

  const handleDeleteChecklistClick = () => {
    props.onDelete(props.uniqueId);
  };

  return (
    <article className="w3-card w3-margin">
      <div className="w3-bar w3-padding w3-theme">
        <div className="w3-bar-item w3-button">
          <b>{title}</b>
        </div>
        <div className="w3-right">
          <Button label={"id: " + props.uniqueId} />
          <Button label="R" />
          <Button label="N" />
          <Button label="D" onClick={handleDeleteChecklistClick} />
        </div>
      </div>
      <div className="w3-container w3-padding">
        <div className="w3-left-align">
          {items.map((item) => (
            <ChecklistItem
              key={item.label}
              label={item.label}
              checked={item.checked}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
