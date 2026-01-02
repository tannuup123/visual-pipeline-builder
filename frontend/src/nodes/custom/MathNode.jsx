import React from "react";
import BaseNode from "../../components/BaseNode";

export default function MathNode() {
  return (
    <BaseNode
      title="Math Node"
      inputs={["a", "b"]}
      outputs={["result"]}
    >
      Does Math Work
    </BaseNode>
  );
}
