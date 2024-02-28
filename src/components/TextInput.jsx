// TextInput.js
import React, { useState } from "react";

const TextInput = ({ onTextChange }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    onTextChange(e.target.value);
  };

  return (
    <div className="">
      {/* <textarea
        className="resize-none border border-gray-300 rounded-md p-2"
        value={text}
        onChange={handleChange}
        placeholder="Enter any Text :"
      /> */}

      <div className="p-2 w-full">
        <div className="relative">
          <textarea
            rows={"5"}
            cols={"40"}
            value={text}
            onChange={handleChange}
            id="message"
            name="message"
            className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            required
            placeholder="Your Message : "
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TextInput;
