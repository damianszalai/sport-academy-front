import React, { useRef, useState } from "react";
import StylePost from "./styleTextArea";

const TextArea = ({name,value, handleInputTextArea}) => {
  const [fontColor, setFontColor] = useState("black");
  const aa = useRef("")

  const handler = ()=> {
    console.log(aa.current.innerHTML);
    handleInputTextArea(aa.current.innerHTML)
  }

  const boldHandler = (formato, e) => {
    e.preventDefault();
    document.execCommand("styleWithCSS", false, true);
    document.execCommand(formato);
    /* let range = document.createRange();
    console.log(range); */
  };
  const styleHandler = (a, b, c, e) => {
    e.preventDefault();
    document.execCommand(a, b, c);
  };
  const colorHandler = (e) => {
    e.preventDefault();
    setFontColor(e.target.value);
    document.execCommand("foreColor", false, fontColor);
  };

  return (
    <StylePost>
      <div className="toolbar">
        <button type="button" onClick={(e) =>{ boldHandler("bold", e); handler()}}>
          B
        </button>
        <button type="button" onClick={(e) =>{ boldHandler("italic", e); handler()}}>
          i
        </button>
        <button
          type="button"
          onClick={(e) =>{styleHandler("backColor", false, "red", e); handler()}}
        >
          red
        </button>
        <button
          type="button"
          onClick={(e) =>{ styleHandler("formatBlock", false, "<h2>", e); handler()}}
        >
          H2
        </button>
        <input onChange={(e) => colorHandler(e)} type="color" />
      </div>
      <div ref={aa} contentEditable onKeyDown={handler} className="textarea"></div>
    </StylePost>
  );
};

export default TextArea;
