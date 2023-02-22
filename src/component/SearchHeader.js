import React, { useState } from "react";

export default function SearchHeader(props) {
  const { search } = props;
  const [value, setValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    search(value);
  };
  const handleChange = (evet) => {
    setValue(evet.target.value);
  };
  return (
    <div className="divSearch">
      <form onSubmit={handleSubmit}>
        <label>Aramak için kelime girin: </label>
        <input onChange={handleChange} value={value} />
      </form>
    </div>
  );
}
