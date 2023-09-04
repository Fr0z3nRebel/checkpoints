import Button from "../Button";
import { ChecklistItem, ChecklistItemDataProps } from "./ChecklistItem";
import { newChecklistItem } from "../../utils/mockData";
import React, { ChangeEvent, useState } from "react";

export interface ChecklistDataProps {
  title: string;
  id: number;
  items: ChecklistItemDataProps[];
}

export interface ChecklistFunctionProps {
  onDelete: (params: any) => any;
}

type ChecklistProps = ChecklistDataProps & ChecklistFunctionProps;

export default function Checklist(props: ChecklistProps) {
  const [title, setTitle] = useState(props.title);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [checklistItems, setChecklistItems] = useState(props.items);

  // Checklist functions
  const handleChecklistTitleFocus = () => {
    setIsEditingTitle(!isEditingTitle);
  };
  const handleUpdateChecklistTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleDeleteChecklistClick = () => {
    props.onDelete(props.id);
  };

  // ChecklistItem functions
  const handleCreateChecklistItemClick = () => {
    setChecklistItems([
      ...checklistItems,
      newChecklistItem(checklistItems.length),
    ]);
  };
  const handleDeleteChecklistItem = (id: number) => {
    console.log("Deleting checklist: " + id);
    setChecklistItems((prevState) =>
      prevState.filter((checklistItem) => checklistItem.id !== id),
    );
    console.log("Checklist deleted!");
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
      <div className="">
        <div className="w3-left-align">
          {/* TODO: Explore other options for key and id. Maybe UUIDs? */}
          {/* TODO: Do the same for Checklist components. */}
          {checklistItems.map((checklistItem) => (
            <ChecklistItem
              key={Math.random() + new Date().toISOString()}
              {...checklistItem}
              onDelete={handleDeleteChecklistItem}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
