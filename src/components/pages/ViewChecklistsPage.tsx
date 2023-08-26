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

export function ViewChecklistsPage() {
  const [checklists, setChecklists] = useState(mockData);

  return (
    <>
      {checklists.map((checklist) => (
        <Checklist key={checklist.title} {...checklist} />
      ))}
    </>
  );
}
