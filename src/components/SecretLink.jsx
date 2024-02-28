// SecretLink.js
import React, { useState } from "react";
import RevealText from "./RevealText";
import copy from "clipboard-copy";
import { NavLink } from "react-router-dom";

const SecretLink = ({ secretLink }) => {
  const id = secretLink.split("/").pop();

  // const [textToCopy, setTextToCopy] = useState(secretLink);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await copy(secretLink);
      setIsCopied(true);
    } catch (error) {
      console.error("Error copying to clipboard", error);
    }
  };

  return (
    <div className="">
      {secretLink ? (
        <div className="bg-blue-300 m-4 rounded-lg">
          <p className="p-4">Generated Secret Link:</p>

          <NavLink to={`/reveal/${id}`}>{secretLink}</NavLink>
          <div className="text-wrap px-2">
            <h2 className="font-bold">{secretLink}</h2>
          </div>
          <div className="m-2">
            <button
              onClick={handleCopyClick}
              className={`bg-blue-500 text-white py-1 m-2 px-2 rounded-md ${
                isCopied ? "bg-green-500" : ""
              }`}
            >
              {isCopied ? "Copied!" : "Copy to Clipboard"}
            </button>
          </div>
        </div>
      ) : (
        <p>No secret link generated yet.</p>
      )}
    </div>
  );
};

export default SecretLink;
