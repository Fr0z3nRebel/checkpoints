import { ChecklistDataProps } from "../components/checklist/Checklist.js";

export const mockData: ChecklistDataProps[] = [
  {
    title: "Groceries",
    id: 0,
    items: [
      {
        id: 0,
        label: "Milk",
        checked: true,
      },
      {
        id: 1,
        label: "Bread",
        checked: false,
      },
    ],
  },
  {
    title: "To Do",
    id: 1,
    items: [
      {
        id: 0,
        label: "Fold the laundry",
        checked: false,
      },
      {
        id: 1,
        label: "Wash the dishes",
        checked: false,
      },
    ],
  },
];

export const newChecklist = (id: number) => {
  return {
    title: "New Checklist",
    id: id,
    items: [
      {
        label: "New Item",
        checked: false,
      },
    ],
  };
};

export const newChecklistItem = (id: number) => {
  return {
    id: id,
    checked: false,
    label: "New Item",
  };
};
