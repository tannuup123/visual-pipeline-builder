import { useEffect, useMemo, useRef, useState } from "react";
import BaseNode from "../components/BaseNode";
import { extractVariables } from "../utils/extractVariables";

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "{{input}}");
  const textareaRef = useRef(null);

  // auto-resize
  useEffect(() => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height =
      textareaRef.current.scrollHeight + "px";
  }, [text]);

  // extract variables
  const variables = useMemo(() => extractVariables(text), [text]);

  // create input handles from variables
  const inputHandles = variables.map((v, i) => ({
    id: `${id}-${v}`,
    top: 40 + i * 24,
  }));

  return (
    <BaseNode
      title="Text"
      inputs={inputHandles}
      outputs={[{ id: `${id}-output` }]}
    >
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type text with {{variables}}"
        style={{ resize: "none", minHeight: "40px" }}
      />
    </BaseNode>
  );
};
