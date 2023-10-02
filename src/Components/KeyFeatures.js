import React, { useEffect, useState } from "react";

const KeyFeatures = (props) => {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  useEffect(() => {
    if (props.mode === "dark") {
      setMyStyle({
        color: "white",
        backgroundColor: "#212529",
      });
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
    }
  }, [props.mode]);

  return (
    <div className="my-5 user-select-none">
      <div
        className="accordion rounded-3"
        id="accordionExample"
        style={myStyle}
      >
        <h1 className="py-2 px-3">{props.heading}</h1>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Rich Text Editing
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                MKL text editor app offers rich text editing capabilities.
              </strong>
              This app allowing users to format text in various styles, such as
              bold, italic, underline, and more. Users can easily create
              documents with diverse typography, making it suitable for tasks
              like content creation, document preparation, and note-taking.
              <code> Through MKL text editor</code>, customization is very
              simple.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Syntax Highlighting
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                Syntax highlighting is a feature that enhances the readability
                and usability of the application, especially when dealing with
                code or structured text.{" "}
              </strong>{" "}
              syntax highlighting is a core feature of our application that
              enhances text readability, aids in error detection, and elevates
              the overall user experience. It is implemented through language
              detection, dynamic styling, customization options, and real-time
              updates, ultimately making our application a powerful tool for
              anyone working with structured or code-based content.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Customization and Extensions
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                MKL Text editor often offer extensive customization options and
                support for extensions or plugins.
              </strong>
              Users can tailor the editor's appearance, behavior, and
              functionality to suit their specific needs. This flexibility makes
              text editors versatile tools for a wide range of tasks, from code
              editing with specific programming languages to creating LaTeX
              documents or writing Markdown. Our text editor application offers
              a unique selling point by providing extensive customization
              options and support for extensions or plugins. We understand that
              every user has specific requirements and preferences when it comes
              to their writing or coding environment. Therefore, we've designed
              our text editor to be highly flexible and adaptable, ensuring it
              can cater to a wide range of tasks and user needs.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
