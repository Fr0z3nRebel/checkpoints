import { ChecklistDataProps } from "../components/checklist/Checklist.js";

export const mockData: ChecklistDataProps[] = [
  {
    title: "Groceries",
    id: 0,
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
    id: 1,
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
