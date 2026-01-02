// llmNode.js

import BaseNode from "../components/BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM"
      inputs={[
        { id: `${id}-system`, top: "33%" },
        { id: `${id}-prompt`, top: "66%" },
      ]}
      outputs={[
        { id: `${id}-response` },
      ]}
    >
      <span>This is a LLM.</span>
    </BaseNode>
  );
};

