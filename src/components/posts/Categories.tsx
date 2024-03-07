import React from "react";

interface IProps {
  categories: string[];
  seleted: string;
  onClick: (category: string) => void;
}

export default function Categories({ categories, seleted, onClick }: IProps) {
  return (
    <section className="text-center p-4">
      <h2 className="text-lg font-bold  mb-2 sm:border-sky-500 sm:border-b">Category</h2>
      <ul className="flex gap-2 justify-center sm:block sm:border-none">
        {categories.map((category) => (
          <li
            className={`cursor-pointer hover:text-sky-500 ${category === seleted && "text-sky-600"}`}
            onClick={() => onClick(category)}
            key={category}
          >
            {category}
          </li>
          //   <li className="cursor-pointer hover:text-sky-500" onClick={() => onClick(category)} key={category}>
          //     {category}
          //   </li>
        ))}
      </ul>
    </section>
  );
}
