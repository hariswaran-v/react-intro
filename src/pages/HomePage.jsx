import { useState } from "react";

const HomePage = () => {
  const [name, setName] = useState("");

  const setNameMethod = (e) => {
    const inputName = e.target.value;

    if (inputName.length >= 4) {
      setName(inputName);
    }
  };
  return (
    <div className="bg-white p-5 m-10 rounded flex items-center justify-between">
      <h4 className="text-xl font-semibold">
        Hello {name != "" ? name : "Guest"}!
      </h4>
      <div>
        <input
          type="text"
          className="bg-gray-200 px-2 py-1 rounded outline-none"
          placeholder="Enter your name"
          autoFocus
          onChange={setNameMethod}
        />
      </div>
    </div>
  );
};

export default HomePage;
