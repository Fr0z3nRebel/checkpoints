import { useState } from "react";

import ChecklistButton from "../button/ChecklistButton";
import { ChecklistItem, ChecklistItemProps } from "./ChecklistItem";

export interface ChecklistProps {
  title?: string;
  items?: ChecklistItemProps[];
}

export default function Checklist(props: ChecklistProps) {
  const [title, setTitle] = useState(props.title || "");
  const [items, setItems] = useState(props.items || []);

  return (
    <article className="w3-card w3-margin">
      <div className="w3-bar w3-padding w3-theme">
        <div className="w3-bar-item w3-button">
          <b>{title}</b>
        </div>
        <div className="w3-right">
          <ChecklistButton label="R" />
          <ChecklistButton label="N" />
          <ChecklistButton label="D" />
        </div>
      </div>
      <div className="w3-container w3-padding">
        <div className="w3-left">
          {items.map((item) => (
            <ChecklistItem label={item.label} checked={item.checked} />
          ))}
          <ChecklistItem label="Checklist Item 1" />
          <ChecklistItem label="Checklist Item 2" />
          <ChecklistItem label="Checklist Item 3" />
        </div>
      </div>
    </article>
  );
}
