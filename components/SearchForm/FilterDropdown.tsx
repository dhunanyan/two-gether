import * as React from "react";
import { CategoryData } from "@/data";

export type FilterDropdownPropsType = {
  onClick: (id: string) => void;
  filter: string[];
};

export const FilterDropdown = ({
  onClick,
  filter,
}: FilterDropdownPropsType) => {
  const [activeCategories, setActiveCategories] = React.useState<boolean[]>(
    CategoryData.map((category) => filter.includes(category.id))
  );

  console.log(activeCategories);

  return (
    <ul className="filter-dropdown">
      {CategoryData.map(({ id, title }, i) => (
        <li key={i} className="filter-dropdown__item">
          <button
            onClick={() => {
              setActiveCategories((prev) => {
                const result = [...prev];
                result[i] = !result[i];

                return result;
              });
              onClick(id);
            }}
            className={
              "filter-dropdown__button" +
              (activeCategories[i] ? " filter-dropdown__button--active" : "")
            }
          >
            {title}
          </button>
        </li>
      ))}
    </ul>
  );
};
