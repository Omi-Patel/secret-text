import React, { useState } from "react";
import TextInput from "./components/TextInput";
import SecretLink from "./components/SecretLink";

import { fireDB } from "./firebase/firedb";
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

function App() {
  const [inputText, setInputText] = useState("");
  const [secretLink, setSecretLink] = useState("");

  const generateSecretLink = async () => {
    if (inputText == "") {
      alert("Please Provide the Data !");
      return;
    }

    try {
      const docRef = await addDoc(collection(fireDB, `secretTexts`), {
        data: `${inputText}`,
      });

      const generatedId = Math.random().toString(36).substring(2, 8);
      const secretLink = `http://localhost:5173/reveal/${docRef.id}`;
      console.log(secretLink);

      // console.log(docRef.id);

      setSecretLink(secretLink);
    } catch (error) {
      console.error("Error generating secret link:", error);
    }
  };

  // const getOriginalText = async () => {
  //   try {
  //     const id = secretLink.split("/").pop();
  //     console.log(id);

  //     const querySnapshot = await getDoc(doc(fireDB, "secretTexts", id));
  //     console.log(querySnapshot.data().data);
  //     const originalText = querySnapshot.data().data;

  //     setInputText(originalText);
  //   } catch (error) {
  //     console.error("Error retrieving original text:", error);
  //   }
  // };

  return (
    <>
      <div className="">
        <div className="flex flex-col justify-center items-center bg-black h-screen">
          <div className="flex flex-col justify-center items-center rounded-lg bg-gray-500  ">
            <TextInput onTextChange={setInputText} />
            <button
              className="bg-blue-500 text-white font-semibold py-2 px-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700 "
              onClick={generateSecretLink}
            >
              Generate Secret Link
            </button>
            <SecretLink secretLink={secretLink} />
          </div>
          {/* <button onClick={getOriginalText}>Get Original Text</button> */}
        </div>
      </div>
    </>
  );
}

export default App;
