import React, { useState } from "react";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const TextForm = (props) => {
  const [text, setText] = useState("");

  const [wordCount, setWordCount] = useState(0);
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const convertToUpperCase = () => {
    setText(text.toUpperCase());
  };

  const convertToLowerCase = () => {
    setText(text.toLowerCase());
  };

  const handleWordCount = () => {
    if (text.trim() === "") {
      setWordCount(0);
    } else {
      let count = text.trim().split(/\s+/).length;
      setWordCount(count);
    }
  };

  const copyTextHandler = () => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to the clipboard", {
      className:'toastify',
      position: "top-center",
      autoClose: 1500,
      theme: "colored",
    });
  };

  const extraSpacesHandler = () => {
    let regex = /[ ]+/g;
    let wordsArr = text.split(regex);
    setText(wordsArr.join(" "));
  };

  return (
    <>
      <div className="pt-5">
        <div className="user-select-none">
          <h1 className="mb-4">{props.heading}</h1>

          <div className="mb-3 ">
            <label htmlFor="textBox" className="form-label">
              Put your text below 👇👇
            </label>
            <textarea
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#212529",
                color: props.mode === "light" ? "black" : "white",
                "--placeholder-color":
                  props.mode === "light" ? "black" : "white",
              }}
              className="main_input_box form-control"
              value={text}
              id="textBox"
              rows="8"
              spellCheck="false"
              autoFocus
              placeholder="Enter text here......."
              onChange={handleOnChange}
              onKeyDown={handleWordCount}
            ></textarea>
          </div>

          <button
            className="btn btn-primary mb-2 ms-2"
            onClick={convertToUpperCase}
            disabled={text.length === 0}
          >
            Conver to UpperCase
          </button>

          <button
            className="btn btn-primary mb-2 ms-2"
            onClick={convertToLowerCase}
            disabled={text.length === 0}
          >
            Conver to LowerCase
          </button>

          <button
            className="btn btn-danger mb-2 ms-2"
            onClick={() => setText("")}
            disabled={text.length === 0}
          >
            Clear
          </button>

          <button
            className="btn btn-success mb-2 ms-2"
            onClick={() => {
              copyTextHandler();
            }}
            disabled={text.length === 0}
          >
            Copy Text
          </button>

          <button
            className="btn btn-primary mb-2 ms-2"
            onClick={extraSpacesHandler}
            disabled={text.length === 0}
          >
            Remove extra spaces
          </button>
        </div>

        <div className="my-5">
          <h2>Your text summary:</h2>
          <p className="mb-1">
            {wordCount} words and {text.length} letters
          </p>
          <p>{wordCount * 0.008} Minutes reading time</p>
          <h3>Preview</h3>
          <p
            className={`border border-${
              props.mode === "light" ? "dark" : "light"
            } bg-${props.mode === "light" ? "light" : "dark"} pt-2 px-3`}
            style={{ minHeight: "150px" }}
          >{`${
            text === ""
              ? "Nothing to Preview..!!☹☹"
              : text
          }`}</p>
        </div>
      </div>
    </>
  );
};

export default TextForm;
