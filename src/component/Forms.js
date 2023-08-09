import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("Test");
  const [select, setSelect] = useState(5);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItems = {
      description,
      select,
      package: false,
      id: Date.now(),
    };

    onAddItem(newItems);
    setDescription("");
    setSelect(1);
  }
  return (
    <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
      <h3>What do you need for your trip ?</h3>
      <select
        value={select}
        onChange={(e) => setSelect(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items...."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
