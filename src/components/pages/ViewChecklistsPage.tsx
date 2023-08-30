import { useState } from "react";

import Checklist, { ChecklistProps } from "../checklist/Checklist";

const mockData: ChecklistProps[] = [
  {
    title: "Groceries",
    items: [
      {
        label: "Milk",
        checked: true,
      },
      {
        label: "Bread",
        checked: false,
      },
    ],
  },
  {
    title: "To Do",
    items: [
      {
        label: "Fold the laundry",
        checked: false,
      },
      {
        label: "Wash the dishes",
        checked: false,
      },
    ],
  },
];

const newChecklist = {
  title: "New Checklist",
  items: [
    {
      label: "New Item",
      checked: false,
    },
  ],
};

export function ViewChecklistsPage() {
  const [checklists, setChecklists] = useState(mockData);

  const handleNewChecklistClick = () => {
    setChecklists((prevState) => [...prevState, newChecklist]);
  };

  return (
    <div>
      <div className="w3-container w3-right-align">
        <div
          className="w3-blue w3-button w3-card w3-padding w3-padding"
          onClick={handleNewChecklistClick}
        >
          +
        </div>
      </div>
      <>
        {checklists.map((checklist, index) => (
          <Checklist key={index} {...checklist} />
        ))}
      </>
    </div>
  );
}
