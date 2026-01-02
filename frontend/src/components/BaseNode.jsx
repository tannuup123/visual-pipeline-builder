import { Handle, Position } from "reactflow";
import "./BaseNode.css";

export default function BaseNode({
  title,
  inputs = [],
  outputs = [],
  children,
}) {
  return (
    <div className={`vs-node vs-node-${title.toLowerCase()}`}>
      <div className="vs-node-header">{title}</div>

      {inputs.map((input, i) => (
        <Handle
          key={input.id}
          id={input.id}
          type="target"
          position={Position.Left}
          style={{ top: `${input.top ?? 50 + i * 25}px` }}
        />
      ))}

      <div className="vs-node-body">{children}</div>

      {outputs.map((output, i) => (
        <Handle
          key={output.id}
          id={output.id}
          type="source"
          position={Position.Right}
          style={{ top: `${output.top ?? 50 + i * 25}px` }}
        />
      ))}
    </div>
  );
}
