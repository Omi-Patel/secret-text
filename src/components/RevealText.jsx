import { doc, getDoc } from "firebase/firestore";
import React, { useState } from "react";
import { fireDB } from "../firebase/firedb";
import { Link, useParams } from "react-router-dom";

const RevealText = () => {
  const [original, setOriginal] = useState("");

  const { id } = useParams();
  // console.log(id);

  const getOriginalText = async () => {
    try {
      const querySnapshot = await getDoc(doc(fireDB, "secretTexts", id));
      // console.log(querySnapshot.data().data);
      const originalText = querySnapshot.data().data;

      setOriginal(originalText);
    } catch (error) {
      console.error("Error retrieving original text:", error);
    }
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-zinc-700">
      <Link to={"/"} className="text-blue-300 text-xl font-semibold bg-slate-600 p-1 rounded-lg">
        Go Back !
      </Link>
      <div className="flex flex-col justify-center mt-8 items-center text-white">
        <h1 className="text-xl font-bold mb-4">
          You Received a Secrete Message :
        </h1>

        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4"
          onClick={getOriginalText}
        >
          Get Original Text
        </button>

        <h1 className="text-xl text-black rounded-lg font-semibold bg-green-300 px-4 py-1">{original}</h1>
      </div>
    </div>
  );
};

export default RevealText;
