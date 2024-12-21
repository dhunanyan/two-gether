"use client";

import * as React from "react";

import "./Select.scss";

export type OptionType = {
  value: string;
  title: string;
};

export type SelectPropsType = {
  options: OptionType[];
  active: OptionType;
  setActive: (option: OptionType) => void;
};

export const Select = ({ options, active, setActive }: SelectPropsType) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = (option: OptionType) => {
    setIsOpen(false);
    setActive(option);
  };

  return (
    <div className="select">
      <div
        className={"select__trigger" + (isOpen ? " select__trigger--open" : "")}
        onClick={() => setIsOpen((prev) => !prev)}
        onBlur={() => setIsOpen(false)}
        tabIndex={0}
      >
        <span className="select__value">
          {active.title || "Select an option"}
        </span>
        <span className="select__arrow">&#9662;</span>
      </div>

      <div
        className={`select__content select__content--${isOpen ? "show" : "hide"}`}
      >
        {options.map((option) => (
          <div
            key={option.value}
            className="select__option"
            onClick={() => handleClick(option)}
            onMouseDown={(e) => e.preventDefault()}
          >
            {option.title}
          </div>
        ))}
      </div>
    </div>
  );
};
